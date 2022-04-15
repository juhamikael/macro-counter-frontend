from backend.userdataprocess.ActivityLevel import ActivityLevel
from backend.userdataprocess.BMR import BMR
from backend.userdataprocess.Calories import CaloriesIntake
from backend.userdataprocess.MacroSplit import MacroSplit
from sqlalchemy.orm import Session
from backend.schemas import UserUpdate
from sqlalchemy.sql import func
from backend import models
import time
from backend.models import User as UserModel


def data(request):
    new_user = UserModel(
        name=request.name,
        age=request.age,
        height=request.height,
        weight=request.weight,
        activity_level=request.activity_level,
        diet_style=request.diet_style,
        body_type=request.body_type,
        gender=request.gender
    )
    return new_user


def data_processor(request):
    bmr_class = BMR(request.weight, request.height, request.age, request.gender)
    bmr = bmr_class.bmr
    activity_level_multiplier = ActivityLevel(request.activity_level).activity_level
    calories = CaloriesIntake(bmr, activity_level_multiplier, request.diet_style)
    macro_split = MacroSplit(calories.calories_daily, request.body_type)
    processed_data = models.ProcessedData(
        name=request.name,
        age=request.age,
        height=request.height,
        weight=request.weight,
        activity_level=request.activity_level,
        diet_style=request.diet_style,
        body_type=request.body_type,
        gender=request.gender,
        bmr=bmr,
        bmr7=bmr * 7,
        bmi=bmr_class.bmi,
        daily_calories=calories.calories_daily,
        weekly_calories=calories.calories_weekly,
        daily_protein=macro_split.protein,
        daily_carbs=macro_split.carbs,
        daily_fat=macro_split.fat,
    )
    return processed_data


def update_user_basic_info(update_user, request: UserUpdate, db: Session):
    update_user.name = request.name
    update_user.age = request.age
    update_user.height = request.height
    update_user.weight = request.weight
    update_user.activity_level = request.activity_level
    update_user.diet_style = request.diet_style
    db.commit()


def update_user_processed_data(update_user, request: UserUpdate, db: Session):
    print(update_user)
    bmr_class = BMR(request.weight, request.height, request.age, update_user.gender)
    bmr = bmr_class.bmr
    activity_level_multiplier = ActivityLevel(request.activity_level).activity_level
    calories = CaloriesIntake(bmr, activity_level_multiplier, request.diet_style)
    macro_split = MacroSplit(calories.calories_daily, update_user.body_type)
    update_user.bmr = bmr
    update_user.bmr7 = bmr * 7
    update_user.bmi = bmr_class.bmi
    update_user.daily_calories = calories.calories_daily
    update_user.weekly_calories = calories.calories_weekly
    update_user.daily_protein = macro_split.protein
    update_user.daily_carbs = macro_split.carbs
    update_user.daily_fat = macro_split.fat
    db.commit()
#
#
# def update_user_calories_left(user_id, db: Session):
#     USER = db.query(models.ProcessedData).filter(models.User.id == user_id).first()
#     calories_consumed = db.query(func.sum(models.FoodEaten.calories).label("calories")).filter(
#         models.FoodEaten.user_id == user_id).first()["calories"]
#     USER.calories_left_today = USER.daily_calories - calories_consumed
#     USER.calories_consumed = calories_consumed
#     db.commit()
#
#

#
# # def update_user_calories_left(user_id, calories_consumed, db: Session):
# #     USER = db.query(models.ProcessedData).filter(models.User.id == user_id).first()
#
# #     # print("Consumed", calories_consumed)
# #     db.commit()
