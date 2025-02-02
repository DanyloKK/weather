import styles from "./WeatherMainData.module.css"
import {useSelector} from "react-redux";
import weatherSelector from "../../redux/weatherSelector.js";
import clouds from "../../assets/img/clouds.png"

const WeatherMainData = () => {
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[date.getDay()];
    const formattedDate = `${date.getDate()} ${date.toLocaleString("en-US", {month: "long"})} ${date.getFullYear()}`;
    const selectorMainInfo = useSelector(weatherSelector.dataInfo)
    return (
        <div className={styles.main__data}>
            {selectorMainInfo.map((item) => (
                <div className={styles.main__data__block} key={item.id}>
                    <h1 className={styles.main__data_day}>{day}</h1>
                    <h2 className={styles.main__data_date}>{formattedDate}</h2>
                    <img className={styles.main__data_picture} src={clouds}/>
                    <p className={styles.main__data_temp}>
                        {item.main?.temp ? item.main.temp : "----"}
                    </p>

                    <span>{item.weather[0].description}</span>
                </div>
            ))}
        </div>
    )
}
export default WeatherMainData;