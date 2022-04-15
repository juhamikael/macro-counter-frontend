import NavBar from "../components/navbar";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import axios from "axios";

const SingleFood = () => {
    const defaultFontColor = "text-gray-500"
    const currentUrl = window.location.href
    const currentFood = currentUrl.split("/")[4]
    const [food, setFood] = React.useState({})

    function fetchFoodById(foodId) {
        axios.get(`http://localhost:8000/api/v1/foods/${foodId}`)
            .then(res => {
                setFood(res.data.food)
            }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchFoodById(currentFood)
    }, [currentFood])

    let navigate = useNavigate()
    return (
        <div>
            <NavBar font_color={defaultFontColor}/>
            <div className="flex justify-center mt-10 ">
                <div className="w-5/6 lg:w-5/12 border-2 rounded-md">
                    <h2 className="mt-3 -mb-3 ml-4 flex text-4xl font-bold">{food.name}</h2>
                    <div className="pl-5 pr-5 pt-5 grid grid-cols-1 lg:grid-cols-2 grid-rows- ">
                        <div className="mb-5">
                            <h2 className="font-bold text-xl">Macros per 100g</h2>
                            <p>Protein: {food.protein} g</p>
                            <p>Carbs: {food.carbs} g</p>
                            <p>Fat: {food.fat} g</p>
                            <p className="font-bold">Group : TODO</p>
                            {/*    dairy product*/}
                        </div>
                        <button className="h-6/6 w-4/12 p-1.5 border-2 mb-5 rounded-md font-bold text-center text-xl
                        rounded-lg bg-green-200 shadow-lg shadow-green-200/50
                        lg:mt-20 lg:w-8/12 lg:h-2/6
                        hover:bg-green-300  "
                                onClick={() => navigate("/addfood")}>
                            Back
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default SingleFood;