import AppForecastTabs from '../app-forecast-tabs/app-forecast-tabs';
import AppForecastTabsOne from '../app-frecast-tabs-one/app-forecast-tabs-one';
import AppForecastTabsMore from '../app-forecast-tabs-more/app-forecast-tabs-more';

import './app-forecast.css';

const AppForecast = ({ temp, condition, conditionClass }) => {    
    return (
        <div className="row">
            <div className="col s12">
                <div className="card app-forecast">
                    <AppForecastTabs />
                    <div className="card-content blue-grey lighten-2">
                        <AppForecastTabsOne temp={22} condition='beach_access' />
                        <AppForecastTabsMore />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AppForecast;