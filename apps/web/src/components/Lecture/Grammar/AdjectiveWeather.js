import React from 'react'
import hot from "../../images/hot.svg"
import cold from "../../images/cold.svg"
import rainy from "../../images/rainy.svg"
import cloudy from "../../images/cloudy.svg"
import windy from "../../images/windy.svg"
import sunny from "../../images/sunny.svg"

const AdjectiveWeather=()=>{
    return(
        <div className="gadject-container">
            <p className="gadject-head">Adjectives of weather:</p>
            
            <div className="gadject-stuff3">
                <div className="image-weather">
                    <img className="weather" alt=""  src={hot} />
                    <div className="weather-text">gbóná (hot)</div>
                </div>
                <div className="image-weather">
                    <img className="weather" alt=""  src={cold} />
                    <div className="weather-text">tutù (cold)</div>
                </div>
                <div className="image-weather">
                    <img className="weather" alt=""  src={rainy} />
                    <div className="weather-text">igba òjo (rainy)</div>
                </div>

                <div className="image-weather">
                    <img className="weather" alt=""  src={cloudy} />
                    <div className="weather-text">ṣù (cloudy)</div>
                </div>
                <div className="image-weather">
                    <img className="weather" alt=""  src={sunny} />
                    <div className="weather-text">oòrùn mú (sunny)</div>
                </div>
                <div className="image-weather">
                    <img className="weather" alt=""  src={windy} />
                    <div className="weather-text">afẹfẹ (windy)</div>
                </div>
            </div>
        </div>
    )
}

export default AdjectiveWeather