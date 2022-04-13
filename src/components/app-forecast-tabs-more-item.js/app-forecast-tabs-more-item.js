
const AppForecastTabsMoreItem = ({ temperature, condition, conditionClass }) => {
    return (
        <div className="col s2">
            <h2>{temperature}°C</h2>
            <p><i className={conditionClass}>{condition}</i></p>
        </div>
    );
}

export default AppForecastTabsMoreItem;