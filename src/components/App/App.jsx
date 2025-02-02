import {useState,useEffect} from 'react'
import {useDispatch} from "react-redux";
import WeatherMainData from "../WeatheMainData/WeatherMainData.jsx";
import WeatherSearchingData from "../WeatherSearchingData/WeatherSearchingData.jsx";
import {cityName} from "../../cityLocations.js";
import {fetchInitialInfo} from "../../redux/weatherSlicer.js";

function App() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchInitialInfo(cityName))
    },[])
    return (
        <div>
            <main className="main__container">
                <WeatherMainData/>
                <WeatherSearchingData/>
            </main>
        </div>
    )
}

export default App
