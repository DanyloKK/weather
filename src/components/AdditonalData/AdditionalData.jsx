import styles from "./AdditionalData.module.css"
import {useSelector} from "react-redux";
import weatherSelector from "../../redux/weatherSelector.js";
import feels from "../../assets/img/feels_like.svg"
import humidity from "../../assets/img/humidity.svg"
import wind from "../../assets/img/wind.svg"
const AdditionalData = () =>{
   const selectorWeather = useSelector(weatherSelector.dataInfo)
    return (
        <div className={styles.additional__data}>
            {selectorWeather.map((item, index) => (
                <ul className={styles.additional__data_list} key={item.id}>
                    <li className={styles.additional__data_item}>
                        {item.main.feels_like}
                        <p>Feels like</p>
                        <img src={feels} alt="feels_like"/>
                    </li>
                    <li className={styles.additional__data_item}>
                        {item.main.humidity}%
                        <p>Humidity</p>
                        <img src={humidity} alt="humidity"/>
                    </li>
                    <li className={styles.additional__data_item}>
                        {item.wind.speed} m/s
                        <p>Wind</p>
                        <img src={wind} alt="wind"/>
                    </li>
                </ul>
            ))}
        </div>
    )
}
export default AdditionalData