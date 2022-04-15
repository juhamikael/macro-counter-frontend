import {useEffect, useState} from "react";
import axios from "axios";

function FetchData(props){
    // Get data from FASTAPI endpoint and console log it
    // localhost:8000/api/users
    const [data, setData] = useState([]);

    function fetchBasicData(){
        axios.get("http://localhost:8000/api/users")
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    function fetchProcessedData(){
        axios.get("http://localhost:8000/api/processed_users_data")
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    useEffect(() => {
        fetchProcessedData()
    }, []);

    return(
        <div>

        </div>
    );
}

export default FetchData
