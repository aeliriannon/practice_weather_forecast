import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom';
// const AppForecastTabsMoreItem = ({ temperature, condition, conditionClass }) => {
//     return (
//         <div className="col s2">
//             <h2>{temperature}°C</h2>
//             <p><i className={conditionClass}>{condition}</i></p>
//         </div>
//     );
// }

const AppForecastTabsMoreItem = () => {


    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&lang=ru&appid=856663d2b72927fe7a6f140d38a378a3')
        .then(data => {
            let array = data.data.list;
            console.log(array);
            array.forEach((item) => {
                console.log(item);
                let temperature = item.main.temp;
                let description = item.weather[0].description;
                let urlIcon = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
                let date = item.dt_txt;
                ReactDOM.render(
                    <div className="row">
                        <div className="col s6">
                            <h2>{temperature}°C</h2>
                        </div>
                        <div className="col s6 right-align">
                            <p className='_description'>{description}</p>
                            <p className='_icon'>
                                <img src={urlIcon} alt="icon" /><br />
                            </p>
                            <p>{date}</p>
                        </div>

                    </div>, document.getElementById('moreForecast')
                )
            })
        })

    return (
        <div id="more" className='app-forecast__more'>
            <div className="row" id="moreForecast">

            </div>
        </div>
    );
}

export default AppForecastTabsMoreItem;