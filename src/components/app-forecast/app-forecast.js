
import AppForecastTabs from '../app-forecast-tabs/app-forecast-tabs';
import AppForecastTabsOne from '../app-frecast-tabs-one/app-forecast-tabs-one';
import AppForecastTabsMore from '../app-forecast-tabs-more/app-forecast-tabs-more';

import './app-forecast.css';

const AppForecast = ({ condition, conditionClass }) => {

    const dataForecast = [
        { temperature: '12', condition: 'beach_access', conditionClass: 'material-icons  _rain' },
        { temperature: '21', condition: 'wb_sunny', conditionClass: 'material-icons  _sun' },
        { temperature: '-9', condition: 'ac_unit', conditionClass: 'material-icons   _snow' },
        { temperature: '18', condition: 'cloud_queu', conditionClass: 'material-icons  _cloud' },
        { temperature: '25', condition: 'wb_sunny', conditionClass: 'material-icons  _sun' }
    ]

    return (
        <div className="row">
            <div className="col s12">
                <div className="card app-forecast">
                    <AppForecastTabs />
                    <div className="card-content blue-grey lighten-2">
                        <AppForecastTabsOne />
                        <AppForecastTabsMore dataForecast={dataForecast} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AppForecast;