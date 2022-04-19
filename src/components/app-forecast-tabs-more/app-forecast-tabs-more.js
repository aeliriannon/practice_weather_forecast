import AppForecastTabsMoreItem from '../app-forecast-tabs-more-item.js/app-forecast-tabs-more-item';
import './app-forecast-tabs-more.css';

const AppForecastTabsMore = () => {

    return (
        <div id="more" className='app-forecast__more'>
            <div className="row">
                <AppForecastTabsMoreItem />
            </div>
        </div>
    );
}

export default AppForecastTabsMore;