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
            <div>
                <SearchForm/>
                {selector.map((item) => (
                    <div  key={item.id}>
                        <p className={styles.searching__location}>{item.name},<span className={styles.searching__country}>{item.sys.country}</span></p>
                        <img src={location} alt="location"/>
                    </div>
                ))}
                <TempretureData/>
                <AdditionalData/>
            </div>
        </div>
    )
}
export default WeatherSearchingData