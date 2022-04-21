import FoodForm from "./foodForm";
import React, {useState} from "react";
import {defaultApiUrl as apiUrl} from "../apiUrl"

function GroupedAddFood(props) {
    const inputDataType = ["text", "number"]
    const [newFood, setNewFood] = useState([])
    const handleSubmit = (e) => {
        const foodData = {
            id: 0,
            name: newFood.name,
            protein: newFood.protein,
            carbs: newFood.carbs,
            fat: newFood.fat,
        }
        fetch(`${apiUrl}/foods`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(foodData),
        })
            .then(res=> console.log(res.data))
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className="grid grid-cols-1 w-5/12">
            <div className="grid grid-cols-1 grid-rows-4">
                <FoodForm
                    input_type={inputDataType[0]}
                    minValue={12}
                    maxValue={100}
                    title="Give food name"
                    // value={age}
                    // Add to newFood List
                    onChange={(e) => {
                        setNewFood({...newFood, name: e.target.value})
                    }}
                />
                <FoodForm
                    input_type={inputDataType[1]}
                    minValue={12}
                    maxValue={100}
                    title="Protein / 100g"
                    // value={age}
                    onChange={(e) => {
                        setNewFood({...newFood, protein: e.target.value})
                    }}
                />
                <FoodForm
                    input_type={inputDataType[1]}
                    minValue={12}
                    maxValue={100}
                    title="Carbs / 100g"
                    // value={age}
                    onChange={(e) => {
                        setNewFood({...newFood, carbs: e.target.value})
                    }}

                />
                <FoodForm
                    input_type={inputDataType[1]}
                    minValue={12}
                    maxValue={100}
                    title="Fat / 100g"
                    // value={age}
                    // onChange={(e) => setAge(e.target.value)}
                    onChange={(e) => {
                        setNewFood({...newFood, fat: e.target.value})
                    }}
                />
                <button
                    className="w-44 mt-2 h-10 shadow-xl shadow-green-200/40 hover:bg-green-300
                bg-green-200 shadow-lg rounded font-bold
                sm:mr-12 lg:w-full hover:text-white"
                    onClick={()=>{
                        handleSubmit()
                        window.location.reload()

                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default GroupedAddFood;