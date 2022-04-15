import NavBar from "../components/navbar";
import React, {useEffect, useState} from "react";
import axios from "axios";
import FoodCard from "../components/foodCard";
import UserCard from "../components/userCard";


// const customStyles = {
//     control: (provided) => {
//         return {
//             ...provided,
//             width: "100%",
//             padding: "0px 0px",
//             textAlign: "center",
//         }
//     },
// }


const UserPage = () => {
    // Tailwind styling
    const defaultFontColor = "text-gray-500"
    const addFoodButton =
        "w-11/12 border-1 rounded h-10 ml-2 mr-2 mt-0.5 text-center font-bold " +
        "bg-green-200 shadow-lg shadow-green-200/50 hover:bg-green-300 "
    const deleteBtn = "text-xs bg-red-400 shadow-xl shadow-red-200/20 text-white font-bold" +
        "hover:bg-red-700 py-2 px-4 rounded"
    const currentUrl = window.location.href
    const currentUser = currentUrl.split("/")[4]
    const [userData, setUserData] = useState([]);
    const [foodData, setFoodData] = useState([]);
    const [showFoodTable, setShowFoodTable] = useState([])
    function fetchProcessedDataById(userId) {
        axios.get(`http://localhost:8000/api/v1/users/processed_data/${userId}`)
            .then(res => {
                setUserData(res.data.user)
            }).catch(err => {
            console.log(err);
        });
    }

    function fetchFoodEatenById(userId) {
        axios.get(`http://localhost:8000/api/v1/users/${userId}/foods_eaten`)
            .then(res => {
                setFoodData(res.data.food_eaten)
            }).catch(err => {
            console.log(err);
        });
    }

    function fetchAllFoods() {
        axios.get(`http://localhost:8000/api/v1/foods`)
            .then(res => {
                setShowFoodTable(res.data.foods)
            }).catch(err => {
            console.log(err);
        });
    }


    useEffect(() => {
        fetchAllFoods()
    }, [])
    useEffect(() => {
        fetchProcessedDataById(currentUser)
    }, [currentUser])
    useEffect(() => {
        fetchFoodEatenById(currentUser)
    }, [currentUser])

    return <div>
        <NavBar font_color={defaultFontColor}/>
        <UserCard uData={userData}
                  deleteButton={deleteBtn}
                  currentUserId = {currentUser}
        />
        <FoodCard uData={userData}
                  fData={foodData}
                  foods={showFoodTable}
                  addFoodButton={addFoodButton}
                  deleteButton={deleteBtn}/>

    </div>
}

export default UserPage

