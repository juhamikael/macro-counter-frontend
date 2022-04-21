import enumArray from "../data_enums/enumsChoices"
import DropDown from "./dropdown"
import Forms from "./form"
import React, {useEffect, useState} from "react"
import {parse} from "postcss";
import axios from "axios"
import fetchProcessedData from "../components/fetchData"
import {useNavigate} from "react-router-dom";
import {defaultApiUrl as apiUrl} from "../apiUrl"

function GroupedDropDowns() {
    const placeholderDataType = [{value: "string"}, {value: "number"}]
    const inputDataType = ["text", "number"]
    // Weight, Age, Height
    const [name, setName] = useState("")
    const [weight, setWeight] = useState(null)
    const [height, setHeight] = useState(null)
    const [age, setAge] = useState(null)
    const [activityType, setActivityType] = useState("")
    const [fixedDietStyle, setDietStyle] = useState("")
    const [fixedGender, setGender] = useState("")
    const [fixedBodyType, setBodyType] = useState("")
    let navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        let activity_level = activityType.value
        let gender = fixedGender.value
        let diet_style = fixedDietStyle.value
        let body_type = fixedBodyType.value
        const userData = {
            id: 0,
            name,
            age: parseInt(age),
            height: parseInt(height),
            weight: parseInt(weight),
            activity_level,
            diet_style,
            body_type,
            gender,
        }
        fetch( `${apiUrl}/users`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userData)
        }).then(res =>
            res.json().then(data => {
                if (res.status === 200) {
                    navigate("/showdata")
                }
                // else {
                //     console.log("Status", res.status)
                // }
            })
        )
    }
    const WIDTH = "w-52"
    const MARGINLEFT = "ml-1"
    return (
        <div className="-mt-20">
            <div className="text-gray-700 mt-52 text-sm">
                <div className="mt-50 lg:grid grid-cols-2">
                    <Forms
                        input_type={inputDataType[0]}
                        placeholder={placeholderDataType[0].value}
                        title=" name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Forms
                        input_type={inputDataType[1]}
                        placeholder={placeholderDataType[1].value}
                        minValue={30}
                        maxValue={200}
                        title=" weight as kg"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    <Forms
                        input_type={inputDataType[1]}
                        placeholder={placeholderDataType[1].value}
                        minValue={60}
                        maxValue={240}
                        title=" height as cm"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    <Forms
                        input_type={inputDataType[1]}
                        placeholder={placeholderDataType[1].value}
                        minValue={12}
                        maxValue={100}
                        title=" age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <DropDown
                        width ={WIDTH}
                        marginLeft={MARGINLEFT}
                        option={enumArray[0]}
                        title="activity level"
                        value={activityType.value}
                        onChange={setActivityType}
                    />
                    <DropDown
                        width = {WIDTH}
                        marginLeft={MARGINLEFT}
                        option={enumArray[1]}
                        title="diet style"
                        value={fixedDietStyle}
                        onChange={setDietStyle}
                    />
                    <DropDown
                        width ={WIDTH}
                        marginLeft={MARGINLEFT}
                        option={enumArray[2]}
                        title="gender"
                        value={fixedGender}
                        onChange={setGender}
                    />
                    <DropDown
                        width ={WIDTH}
                        marginLeft={MARGINLEFT}
                        option={enumArray[3]}
                        title="body type"
                        value={fixedBodyType.value}
                        onChange={setBodyType}
                    />
                </div>
            </div>
            <button
                className="w-44 mt-2 ml-5 h-10
                bg-green-400 shadow-lg rounded font-bold
                sm:mr-12 lg:w-11/12"
                onClick={handleSubmit}

            >
                Submit
            </button>
        </div>
    )
}

export default GroupedDropDowns
