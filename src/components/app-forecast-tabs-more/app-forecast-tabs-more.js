import AppForecastTabsMoreItem from '../app-forecast-tabs-more-item.js/app-forecast-tabs-more-item';
import './app-forecast-tabs-more.css';

const AppForecastTabsMore = ({ dataForecast }) => {
    const elements = dataForecast.map((item, i) => {
        return (
            <AppForecastTabsMoreItem key={i} {...item} />
        );
    });
    return (
        <div id="more" className='app-forecast__more hide'>
            <div className="row">
                {elements}
            </div>
        </div>
    );
}

export default AppForecastTabsMore;