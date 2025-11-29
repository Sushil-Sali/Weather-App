import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherInfo(){
    let [WeatherInfo,setWeatherInfo]=useState({    
        city:"Mumbai",
        temp:27.58,
        tempMin:27.58,
        tempMax:27.58,
        humidity:74,
        feelsLike:30.33,
        weather:"Clear Sky" ,})

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo)
    }
    return(
        <div>
            <h1>Search For Weather</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={WeatherInfo}/>
        </div>
    );
}