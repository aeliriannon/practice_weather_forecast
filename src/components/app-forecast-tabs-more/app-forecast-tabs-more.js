import AppForecastTabsMoreItem from '../app-forecast-tabs-more-item.js/app-forecast-tabs-more-item';
import ReactDOM from 'react-dom';


import './app-forecast-tabs-more.css';
import axios from "axios";

const AppForecastTabsMore = () => {
    let arrayForecastData = [];
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&lang=ru&appid=856663d2b72927fe7a6f140d38a378a3')
        .then(data => {
            let array = data.data.list;
            array.forEach((item, i) => {
                let temperature = item.main.temp;
                let description = item.weather[0].description;
                let urlIcon = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
                let date = item.dt_txt;
                arrayForecastData[i] = { temperature: temperature, description: description, urlIcon: urlIcon, date: date };
            })

            return arrayForecastData;
        })

    const listDataMore = arrayForecastData.map((item, i) => {
        return (
            <AppForecastTabsMoreItem key={i} {...item} />
        );
    });

    return (
        <div id="more" className='app-forecast__more'>
            {listDataMore}
        </div>
    );
}

export default AppForecastTabsMore;