import NavBar from "../components/navbar";
import BasicTable from "../components/table_basic";


const ShowData = () => {

    const defaultFontColor = "text-gray-500"
    return <div>
        <NavBar font_color={defaultFontColor}/>
        <BasicTable endPoint={"users_processed_data"}/>
    </div>
}
export default ShowData;