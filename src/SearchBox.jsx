import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox({updateInfo}) {
    let [city,setCity]=useState("")
 
    let API_URL= import.meta.env.VITE_API_URL;
    let API_KEY= import.meta.env.VITE_API_KEY;
    
    let getWeatherInfo=async()=>{
  
      let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse= await response.json();
      let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description ,
      };
      console.log(result)
      return result;
  
    }
    let handleCity=(evt)=>{
        setCity(evt.target.value)
    }
    let handleSubmit=async(evt)=>{
    
                evt.preventDefault()
        setCity("")
       let newInfo=await getWeatherInfo()
       updateInfo(newInfo)
    
    }
  return (
    <div className="SearchBox">
      <form onClick={handleSubmit}>
        <TextField id="city" label="City-Name" variant="outlined"  value={city} onChange={handleCity} required/>
        <br /><br />     
      <Button variant="contained" type="submit">Search</Button>
      </form>
    </div>
  );
}
