import Home from "./pages/home"
import ShowData from "./pages/showdata"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UserPage from "./pages/userPage"
import AddFood from "./pages/addFood";
import SingleFood from "./pages/singleFood";
import Faq from "./pages/Faq";


function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/showdata" element={<ShowData/>}/>
                    <Route path="/user/:id" element={<UserPage/>}/>
                    <Route path="/addFood" element={<AddFood/>}/>
                    <Route path="food/:id" element={<SingleFood/>}/>
                    <Route path="faq" element={<Faq/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App

