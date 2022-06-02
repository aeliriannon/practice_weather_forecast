import AppForecastTabsMoreItem from '../app-forecast-tabs-more-item.js/app-forecast-tabs-more-item';

import React from 'react';


import './app-forecast-tabs-more.css';
import axios from "axios";

const AppForecastTabsMore = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&lang=ru&appid=856663d2b72927fe7a6f140d38a378a3')
            .then(forecast => {
                let array = forecast.data.list;
                let newArray = array.map((item, i) => {
                    let temperature = item.main.temp;
                    let description = item.weather[0].description;
                    let urlIcon = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
                    let date = item.dt_txt;
                    return { temperature, description, urlIcon, date };
                })
                console.log(newArray);
                setData(newArray);
            })
    }, []);

    // let arrayForecastData = [];


    // const listDataMore = arrayForecastData.map((item, i) => {
    //     return (
    //         <AppForecastTabsMoreItem key={i} {...item} />
    //     );
    // });

    return (
        <div id="more" className='app-forecast__more'>
            {data.map((item, i) => (<AppForecastTabsMoreItem key={i} {...item} />))}


        </div>
    );
}

export default AppForecastTabsMore;