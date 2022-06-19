import {useNavigate} from "react-router-dom";
import NavBar from "../components/navbar";
import React from "react";
import GroupedAddFood from "../components/addNewFood";
import BasicTable from "../components/table_basic";

const AddFood = () => {
    const defaultFontColor = "text-gray-500"
    return (
        <div>
            <NavBar
                font_color={defaultFontColor}
            />
            <div className="flex justify-center mt-20">
                <GroupedAddFood/>
            </div>
            <div className="flex justify-center mt-24">
                <BasicTable endPoint={"foods"}/>
            </div>
        </div>
    )
}
export default AddFood
