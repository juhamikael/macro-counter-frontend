import {useNavigate} from "react-router-dom";
import axios from "axios";
import * as React from 'react';



const UserCard = ({uData, currentUserId}) => {
    let userData = uData;
    let navigate = useNavigate()
    const userId = currentUserId
    // Modal


    const deleteUser = async (event, id) => {
        axios.delete(`http://localhost:8000/api/v1/users/${id}`)
            .then(res => {
                console.log(res.data)
                navigate(`/showdata`)
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div className="flex justify-center">
            <div className="w-full lg:w-8/12 border-2 rounded-xl mt-20">
                <div className="grid grid-cols-2">
                    <h2 className="mt-3 -mb-3 ml-4 flex text-4xl font-bold">{userData.name}</h2>
                    <div className="flex justify-end">
                        <button onClick={(e) => deleteUser(e, userId)}
                                className="bg-red-400 text-white w-4/12 lg:h-2/12 rounded-md ">
                            Delete User
                        </button>
                    </div>
                </div>
                <div
                    className="capitalize grid grid-rows-3 lg:grid-rows-1 sm:grid-cols-1 lg:grid-cols-3 pl-5 pr-5 pt-5  ">
                    <div className="h-10">
                        <h2 className="font-bold text-xl">Basic Info</h2>
                        <p>Age : {userData.age}</p>
                        <p>Height : {userData.height} cm</p>
                        <p>Weight : {userData.weight} kg</p>
                        <p>Gender : {userData.gender}</p>
                        <p>Bodytype : {userData.body_type}</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl">Detailed Info</h2>
                        <p>Activity : {userData.activity_level}</p>
                        <p>Diet Style : {userData.diet_style}</p>
                        <p>BMI : {userData.bmi}</p>
                        <p>BMR : {userData.bmr}</p>
                        <p>BMR7 : {userData.bmr7}</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl">Calories Info</h2>
                        <p>Daily Calories : {userData.daily_calories}</p>
                        <p>Weekly Calories : {userData.weekly_calories}</p>
                        <p>Daily Fat : {userData.daily_fat}</p>
                        <p>Daily Carbs : {userData.daily_carbs}</p>
                        <p>Daily Protein : {userData.daily_protein}</p>
                    </div>

                    <div className="mt-2 mb-5">
                        <button
                            className="rounded-lg bg-green-200 shadow-lg shadow-green-200/50 hover:bg-green-300 p-1.5 w-7/12 "
                            onClick={() => navigate("/showdata")}>
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserCard;