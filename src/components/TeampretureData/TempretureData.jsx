import styles from "./TempretureData.module.css"
import {useSelector} from "react-redux";
import weatherSelector from "../../redux/weatherSelector.js";

const TempretureData = () => {
    const selectorTemperature = useSelector(weatherSelector.dataInfo);
    return (
        <>
            {selectorTemperature.map((item) => (
                <div className={styles.tempreture__data} key={item.id}>
                    <div>
                        <p className={styles.temp_max}>{item.main.temp_max} K</p>
                        <p className={styles.temp__inner}>Max tempreture</p>
                    </div>
                    <div>
                        <p className={styles.temp_min}>{item.main.temp_min} K</p>
                        <p className={styles.temp__inner}>Min tempreture</p>
                    </div>

                </div>
            ))}
        </>

    )
}
export default TempretureData