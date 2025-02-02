import styles from "./TempretureData.module.css"
import {useSelector} from "react-redux";
import weatherSelector from "../../redux/weatherSelector.js";

const TempretureData = () => {
    const selectorTemperature = useSelector(weatherSelector.dataInfo)
    return (
        <div className={styles.tempreture__data}>
            {selectorTemperature.map((item) => (
                <div key={item.id}>
                    <p>{item.main.temp_max} <p>Max</p></p>
                    <p>{item.main.temp_min} <p>Min</p></p>
                </div>
            ))}
        </div>

    )
}
export default TempretureData