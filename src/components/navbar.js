import {useNavigate} from "react-router-dom";

function Navbar(props) {
    let navigate = useNavigate()
    const style = "ml-3 hover:text-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none " +
        "focus:shadow-outline focus:border-green-300 "
    return (

        <div className={props.font_color}>
            <nav className="p-6 bg-neutral-800">
                <div className="flex justify-between items-center">
                    <h1 className="pr-6 border-r-2 text-2xl font-bold text-white">
                        weightData_api
                    </h1>
                    <div className="font-bold">
                        <button onClick={() => navigate("/")} className={style}>Home</button>
                        <button onClick={() => navigate("/showdata")} className={style}>Show User Data</button>
                        <button onClick={() => navigate("/addfood")} className={style}>Add Food</button>
                        <button onClick={() => navigate("/faq")} className={style}>FAQ</button>
                    </div>
                    <div className="flex justify-between flex-grow">
                        <div className="flex ml-6 items-center"></div>
                        <div className="md:flex space-x-6 hidden">
                            {/*{props.signUp}*/}
                            {/*{props.login}*/}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
        ;
}

export default Navbar
