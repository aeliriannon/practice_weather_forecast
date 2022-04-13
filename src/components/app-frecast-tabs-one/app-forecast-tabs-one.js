import './app-forecast-tabs-one.css';

const AppForecastTabsOne = ({ temp, condition, conditionClass }) => {
    if (condition === 'ac_unit') {
        conditionClass = 'material-icons _snow';
    } else if (condition === 'wb_sunny') {
        conditionClass = 'material-icons _sun';
    } else if (condition === 'cloud_queue') {
        conditionClass = 'material-icons _cloud';
    } else if (condition === 'beach_access') {
        conditionClass = 'material-icons _rain';
    }
    return (
        <div id="one" className='app-forecast__one'>
            <div className="row valign-wrapper">
                <div className="col s12">
                    <div className="row">
                        <div className="col s6">
                            <h2>{temp}°C</h2>
                        </div>
                        <div className="col s6">
                            <p className='right-align'><i className={conditionClass}>{condition}</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppForecastTabsOne;