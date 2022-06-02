import './app-forecast-tabs.css';

const AppForecastTabs = () => {
    return (
        <div className="card-tabs">
            <ul className="tabs tabs-fixed-width  blue-grey lighten-4">
                <li className="tab"><a className="active" href="one">1 day</a></li>
                <li className="tab"><a href="six">5 days</a></li>
            </ul>
        </div>
    );
}



export default AppForecastTabs;