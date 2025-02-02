import SearchForm from "../SearchForm/SearchForm.jsx";
import TempretureData from "../TeampretureData/TempretureData.jsx";
import AdditionalData from "../AdditonalData/AdditionalData.jsx";
import styles from "./WeatherSearchingData.module.css"
import {useSelector} from "react-redux";
import weatherSelector from "../../redux/weatherSelector.js";
import location from "../../assets/img/location.svg"

const WeatherSearchingData = () => {
    const selector = useSelector(weatherSelector.dataInfo)
    return (
        <div className={styles.searching__data}>
            <SearchForm/>
            {selector.map((item) => (
                <div key={item.id}>
                    <span>{item.name},{item.sys.country}</span>
                    <img src={location} alt="location"/>
                </div>
            ))}
            <TempretureData/>
            <AdditionalData/>
        </div>
    )
}
export default WeatherSearchingData