import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom';

import './app-forecast-tabs-one.css';



const AppForecastTabsOne = () => {

    let oneForecast = [];
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Минск,BY&units=metric&lang=ru&appid=856663d2b72927fe7a6f140d38a378a3')
        .then(data => {
            oneForecast.push(data.data.main, data.data.weather[0]);
            let temperature = oneForecast[0].temp;
            let description = oneForecast[1].description;
            ReactDOM.render(
                <div className="row">
                    <div className="col s6">
                        <h2>{temperature}°C</h2>
                    </div>
                    <div className="col s6">
                        <p className='right-align _description'>{description}</p>
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