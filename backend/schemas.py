from pydantic import BaseModel, Field
from backend.userdataprocess.ActivityLevel import ActivityType
from backend.userdataprocess.BMR import Gender
from backend.userdataprocess.MacroSplit import BodyType
from backend.userdataprocess.Calories import DietStyle

genders = ["male", "female"]


class UserIn(BaseModel):
    id: int
    name: str
    age: int = Field(gt=10, lt=100, default=20)
    height: int = Field(gt=40, lt=240, default=165)
    weight: int = Field(gt=15, lt=300, default=65)
    activity_level: ActivityType = Field(default=ActivityType.MODERATE)
    diet_style: DietStyle = Field(default=DietStyle.MAINTAIN_WEIGHT)
    body_type: BodyType = Field(default=BodyType.MESOMORPH)
    gender: Gender

    class Config:
        orm_mode = True


class UserUpdate(BaseModel):
    name: str
    age: int = Field(gt=10, lt=100, default=20)
    height: int = Field(gt=40, lt=240, default=165)
    weight: int = Field(gt=15, lt=300, default=65)
    activity_level: ActivityType = Field(default=ActivityType.MODERATE)
    diet_style: DietStyle = Field(default=DietStyle.MAINTAIN_WEIGHT)


    class Config:
        orm_mode = True

class UserOut(BaseModel):
    id: int
    name: str
    age: int = Field(gt=10, lt=100, default=20)
    height: int = Field(gt=40, lt=240, default=165)
    weight: int = Field(gt=15, lt=300, default=65)
    activity_level: ActivityType = Field(default=ActivityType.MODERATE)
    diet_style: DietStyle = Field(default=DietStyle.MAINTAIN_WEIGHT)
    body_type: BodyType = Field(default=BodyType.MESOMORPH)
    gender: Gender
    bmr: int
    bmr7: int
    bmi: int
    daily_calories: int
    weekly_calories: int
    protein: int
    carbs: int
    fat: int


    class Config:
        orm_mode = True


class FoodIn(BaseModel):
    id: int
    name: str
    protein: float
    carbs: float
    fat: float

    class Config:
        orm_mode = True


class FoodUpdate(BaseModel):
    protein: float
    carbs: float
    fat: float

    class Config:
        orm_mode = True


class FoodNameUpdate(BaseModel):
    name: str

    class Config:
        orm_mode = True


class FoodEaten(BaseModel):
    user_id: int
    food_id: int
    quantity: int
    meal_type: int

    class Config:
        orm_mode = True


class CaloriesLeft(BaseModel):
    user_id: int
    calories_left: int

    class Config:
        orm_mode = True
