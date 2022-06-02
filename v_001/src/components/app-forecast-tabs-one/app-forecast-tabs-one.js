import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom';

import './app-forecast-tabs-one.css';



const AppForecastTabsOne = () => {

    let oneForecast = [];
    
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Гданьск,PL&units=metric&lang=ru&appid=your_key')
        .then(data => {
            oneForecast.push(data.data.main, data.data.weather[0]);
            let temperature = oneForecast[0].temp;
            let description = oneForecast[1].description;
            let urlIcon = `http://openweathermap.org/img/wn/${oneForecast[1].icon}@2x.png`
            ReactDOM.render(
                <div className="row hide">
                    <div className="col s6">
                        <h2>{temperature}°C</h2>
                    </div>
                    <div className="col s6 right-align">
                        <p className='_description'>{description}</p>
                        <p className='_icon'>
                            <img src={urlIcon} alt="icon" /><br />
                        </p>
                    </div>

                </div>, document.getElementById('oneForecast')
            )

        });

    return (
        <div id="one" className='app-forecast__one'>
            <div className="row valign-wrapper">
                <div className="col s12" id='oneForecast'>

                </div>
            </div>
        </div>
    )

}

export default AppForecastTabsOne;