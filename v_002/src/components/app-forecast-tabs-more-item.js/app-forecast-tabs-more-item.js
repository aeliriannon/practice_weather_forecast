import React from 'react';


const AppForecastTabsMoreItem = ({ temperature, description, urlIcon, date }) => {
    return (
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

        </div>
    );
}

export default AppForecastTabsMoreItem;