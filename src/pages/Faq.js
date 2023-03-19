import {useNavigate} from "react-router-dom";
import NavBar from "../components/navbar";
import FaqSection from "../components/faqsection";
const Faq = () => {
    const defaultFontColor = "text-gray-500"
    const optionalFontColor = "text-gray-900"
    return <div>
        <NavBar
            font_color={defaultFontColor}
        />
        <FaqSection/>
    </div>
}
export default Faq
