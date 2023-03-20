import React, { useEffect, useState } from "react";
import DropDown from "./dropdown";
import QuantityForm from "./quantityForm";
import axios from "axios";
import { defaultApiUrl as apiUrl } from "../apiUrl";

function MealType(mealType) {
  return meals.find((meal) => meal.Header === mealType);
}

const FoodCard = ({ uData, fData, foods, addFoodButton, deleteButton }) => {
  const current_Id = parseInt(window.location.href.split("/")[4]);
  let userData = uData;

  const [foodId, setAddFood] = useState(foods || []);
  const [quantity, setQuantity] = useState(100);
  const [getCalsData, setCalsData] = useState(true);
  const [foodsEaten, setFoodsEaten] = useState(fData || []);
  const [userEatenCalories, setFoodsEatenCalories] = useState(0 || []);
  const [userProtein, setProtein] = useState(0 || []);
  const [userCarbs, setCarbs] = useState(0 || []);
  const [userFat, setFat] = useState(0 || []);
  const [calsLeftToday, setCalsLeftToday] = useState(0 || []);
  const getURL = `${apiUrl}/users/${current_Id}/foods_eaten`;
  let newFoodUrl = `${apiUrl}/foods/eaten/${current_Id}`;
  if (getCalsData) {
    axios.get(getURL).then((res) => {
      setFoodsEaten(res.data.food_eaten);
      setCalsData(false);
      if (res.data.food_eaten.length === 0) {
        setFoodsEatenCalories([0]);
      } else {
        setFoodsEatenCalories(res.data.sum_calories);
      }
    });

    axios
      .get(`${apiUrl}/users/${current_Id}/foods_eaten`)

      .then((res) => {
        console.log(res.data.sum_fat)
        const calsLeft =
          res.data.daily_calories -
          res.data.sum_calories;
        if (res.data.food_eaten.length === 0) {
          setProtein(0);
          setCarbs(0);
          setFat(0);
        } else {
          setProtein(res.data.sum_protein);
          setCarbs(res.data.sum_carbs);
          setFat(res.data.sum_fat);
          setCalsLeftToday(calsLeft);
        }
      });
  }

  const foodData = {
    user_id: current_Id,
    food_id: foodId,
    quantity: quantity,
    meal_type: 1,
  };
  const foodChoicesForDropDown = foods.map((food) => ({
    value: food.id,
    label: food.name,
  }));

  const handleSubmit = async (event, foodData) => {
    event.preventDefault();
    await fetch(newFoodUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foodData),
    });
    axios.get(getURL).then((res) => {
      console.log("res.data", res.data);
      setFoodsEaten(res.data.food_eaten);
      setFoodsEatenCalories(res.data.sum_calories);
      setCalsLeftToday(
        res.data.daily_calories - res.data.sum_calories
      );
      setFat(res.data.sum_fat);
      setProtein(res.data.sum_protein);
      setCarbs(res.data.sum_carbs);
    });
    console.log("Food: ", foodData);
  };
  const handleSingleDelete = async (event, foodId, userId) => {
    event.preventDefault();
    //http://localhost:8000/api/foods/{food_id}/eaten?food_eaten_id=12&user_id=16
    const deleteURL = `${apiUrl}/foods/user/eatenfoods?food_eaten_id=${foodId}&user_id=${userId}`;
    await fetch(deleteURL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    axios
      .get(getURL)
      .then((res) => {
        if (res.data.food_eaten.length === 0) {
          console.log("Length is 0");
          setFoodsEatenCalories(0);
          setFat(0);
          setCarbs(0);
          setProtein(0);
          setFoodsEaten([]);
        } else {
          setFoodsEaten(res.data.food_eaten);
          setFoodsEatenCalories(res.data.sum_calories.calories);
          setFat(res.data.sum_fat.fat);
          setProtein(res.data.sum_protein.protein);
          setCarbs(res.data.sum_carbs.carbs);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteAllEatenFoods = async (event, userId) => {
    event.preventDefault();
    const url = `${apiUrl}/users/${userId}/eaten`;
    await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    axios
      .get(getURL)
      .then((res) => {
        setFoodsEaten(res.data.food_eaten);
        setFoodsEatenCalories(res.data.sum_calories.calories);
        setFat(0);
        setProtein(0);
        setCarbs(0);
        if (foodsEaten.length === 0) {
          setFoodsEatenCalories(res.data.sum_calories.calories);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log({"Fat": userFat, "Protein": userProtein, "Carbs": userCarbs})
  useEffect(() => {
    setFoodsEaten(fData);
  }, [fData]);
  useEffect(() => {
    setFoodsEatenCalories(userEatenCalories);
    setCalsLeftToday(userData.daily_calories - userEatenCalories);
  }, [userEatenCalories]);

  return (
    <div>
      <div>
        <div className="flex justify-center mt-5">
          <div className="w-full lg:w-8/12 border-2 rounded-md ">
            <h2 className="mt-3 mb-3 justify-center ml-4 flex text-2xl lg:text-4xl font-bold">
              Foods eaten by {userData.name}{" "}
            </h2>
            <div className="grid grid-cols-1 place-items-center">
              <div className="ml-4 mt-2 mb-3 text-md lg:text-2xl font-bold text-center">
                <div className="grid grid-cols-2">
                  <div className="border-2 mr-5 p-5 rounded-xl border-gray-100/60 shadow shadow-gray-100/50 ">
                    <p>
                      Calories Consumed Today:{" "}
                      <span className="text-green-500">
                        {userEatenCalories}
                      </span>
                    </p>
                    <div className="grid grid-cols-3 text-center">
                      <p>Fat </p>
                      <p>Carbs</p>
                      <p>Protein</p>
                    </div>
                    <div className="grid grid-cols-3 text-center text-green-400">
                      <p>{parseInt(userFat)}</p>
                      <p>{parseInt(userCarbs)}</p>
                      <p>{parseInt(userProtein)}</p>
                    </div>
                  </div>
                  <div className="border-2 ml-5 p-5  rounded-xl border-gray-100/60 shadow shadow-gray-100/50">
                    <p>
                      Calories Left Today:{" "}
                      <span className="text-red-400">{calsLeftToday}</span>
                    </p>
                    <div className="grid grid-cols-3 text-center">
                      <p>Fat </p>
                      <p>Carbs</p>
                      <p>Protein</p>
                    </div>
                    <div className="grid grid-cols-3 text-center text-red-400">
                      <p>{parseInt(userData.daily_fat - userFat)}</p>
                      <p>{parseInt(userData.daily_carbs - userCarbs)}</p>
                      <p>{parseInt(userData.daily_protein - userProtein)}</p>
                    </div>
                  </div>
                </div>

                <button
                  className={`w-full ${deleteButton}`}
                  onClick={(e) => deleteAllEatenFoods(e, current_Id)}
                >
                  Delete All Food Data
                </button>
              </div>
            </div>
            <div className="justify-center grid grid-cols-1 ml-8">
              <DropDown
                marginLeft="ml-2"
                width="w-11/12"
                height="h-2/6"
                title="foods"
                option={foodChoicesForDropDown}
                onChange={(e) => setAddFood(e.value)}
              />
              <QuantityForm
                width="w-11/12"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button
                className={addFoodButton}
                onClick={(e) => handleSubmit(e, foodData)}
              >
                Add New Food
              </button>
            </div>
            <table className="table-fixed w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Food</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Protein</th>
                  <th className="px-4 py-2">Carbs</th>
                  <th className="px-4 py-2">Fat</th>
                  <th className="px-4 py-2">Calories</th>
                  {/*<th className="px-4 py-2">Meal Type</th>*/}
                  <th className="px-4 py-2">Time Added</th>
                  <th className="px-4 py-2"> -</th>
                </tr>
              </thead>
              <tbody>
                {foodsEaten.map((food, index) => {
                  const meals = [
                    { id: 1, value: "Breakfast" },
                    { id: 2, value: "Lunch" },
                    { id: 3, value: "Dinner" },
                    { id: 4, value: "Supper" },
                    { id: 5, value: "Random Snack" },
                  ];
                  // match meal type to meal type id
                  // const mealType = meals.find(meal => meal.id === food.meal_type.value);
                  // console.log(mealType);

                  return (
                    <tr className="border px-4 py-2 text-center" key={index}>
                      <td className="p-4">{food.food_name}</td>
                      <td>{food.quantity} g</td>
                      <td>{parseInt(food.protein)} g</td>
                      <td>{parseInt(food.carbs)} g</td>
                      <td>{parseInt(food.fat)} g</td>
                      <td>{food.calories} kcal</td>
                      {/*<td>{}</td>*/}

                      <td>{food.time}</td>
                      <td className="pr-7">
                        <button
                          className={deleteButton}
                          onClick={(e) =>
                            handleSingleDelete(e, food.id, current_Id)
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
