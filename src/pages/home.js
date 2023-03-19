import {useNavigate} from "react-router-dom";
import NavBar from "../components/navbar";
import HeroSection from "../components/heroSection";
const Home = () => {
    const defaultFontColor = "text-gray-500"
    const optionalFontColor = "text-gray-900"
    return <div>
        <NavBar
            font_color={defaultFontColor}
        />
        <HeroSection font_color={optionalFontColor}/>

    </div>
}
export default Home
