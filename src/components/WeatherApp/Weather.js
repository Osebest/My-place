import React, {Fragment, useRef, useState} from 'react';
import BackBtn from '../BackBtn';
import '../css/Weather.css';
import HomeBtn from '../HomeBtn';
import Hot from '../images/hot.png';
import Cold from "../images/snow.png";

export default function Weather() {
  const zipRef = useRef(null);
  const feelingRef = useRef();
  // eslint-disable-next-line
  const [datas, setData] = useState({});
  const [error, setError] = useState('');
  const [date, setDate] = useState('');
  const [feelings, setFeelings] = useState('');
  const [country, setCountry] = useState('');
  const [weathercondition, setWeathercondition] = useState('');
  const [temp, setTemp] = useState('')
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const apiKey = '&appid=e4eabc8d7631ab8086c4f4181078f805&units=metric';
  let d = new Date();
  let newDate = d.toDateString();

  const getWeather = async (baseUrl, zip, apiKey) => {
    const res = await fetch(baseUrl+zip+apiKey)
    try {
      const data = await res.json();
      return data;
    }catch(error){
      console.log("error", error);
    }
  }

  const updateUI = (data) => {
    document.getElementById("error").style.display= "none";
    if(!data.message){
      setError('');
      setData(data);
      setDate(newDate);

      if(feelingRef.current.value){
        setFeelings(feelingRef.current.value)
      }else{
        setFeelings(<Fragment>What do you feel &#128525;?</Fragment>)
      }   

      setCountry(data.name+', '+data.sys.country);
      const weatherinfo = data.weather[0].description;
      const weatherinfos = weatherinfo.charAt(0).toUpperCase() + weatherinfo.slice(1);
      setWeathercondition(weatherinfos);
      const temperature = Math.round(data.main.temp);
      setTemp(<Fragment>{temperature}&#176;C</Fragment>);

      if(temperature<=20){
        document.getElementById('weather_image').src = Cold;
      }else if(temperature>=28){
        document.getElementById('weather_image').src = Hot;
      }else{
        document.getElementById('weather_image').src = 'https://freepngimg.com/thumb/weather/23698-6-weather-transparent-background.png';
      }

      setTimeout(async ()=> {
        document.getElementById("data").style.opacity = "1";
        document.getElementById("weather-data").style.display="grid";
        document.getElementById("weather-data").style.opacity = "1";
        document.getElementById("weather-data").scrollIntoView();
      },500);

    }else{
      setError(data.message);
      document.getElementById("weather-data").style.display="none";
      document.getElementById("weather-data").style.opacity = "0";
      document.getElementById("data").style.opacity = "1";
      document.getElementById("error").style.display= "block"; 
    }
  }

  const generate = (evt) =>{
    evt.preventDefault();
    const zip = zipRef.current.value;
    getWeather(baseUrl,zip,apiKey)
      .then((data)=>{
        updateUI(data)
      })
  }

  return (
    <main>
      <div className='back'>
        <BackBtn />
        <h2>Weather App</h2>
      </div>
      <div className='main3'>
        <h2>Your Weather Today</h2>
        <form className='form'>
          <div className='zip'>
            <label>City</label>
            <input className='input' type="text" placeholder="Enter city..." id="zip" ref={zipRef}/>
          </div>
          <textarea rows='4' cols="50" placeholder='What do you feel?...' ref={feelingRef}></textarea>
          <button className='generate' id='generate' onClick={generate}>Generate</button>
        </form>
      </div>
      <div className='data' id='data'>
        <div className='weather-data' id='weather-data'>
          <div className='div1'>
            <h2 className='temp'>{temp}</h2>
            <h4 className='feelings'>{feelings}</h4>
          </div>
          <div className='div2'>
            <h3 className='country'>{country}</h3>
            <h4 className='date'>{date}</h4>
            <img src={'https://freepngimg.com/thumb/weather/23698-6-weather-transparent-background.png'} alt='weather' className='weather_image' id='weather_image'/>
            <h4 className='weather_condition'>{weathercondition}</h4>
          </div>
        </div>
        <div className='error' id='error'>
          <p className='message'>{error}</p>
        </div>
      </div>
      <HomeBtn />
    </main>
  )
}
