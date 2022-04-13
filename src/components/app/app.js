
import AppSearch from '../app-search/app-search';
import AppForecast from '../app-forecast/app-forecast';
import AppSaveList from '../app-save-list/app-save-list';

import './app.css';

function App() {
    const data = [
        {city: 'City 1'},
        {city: 'City 2'},
        {city: 'City 3'},
        {city: 'City 4'},
        {city: 'City 5'},
        {city: 'City 6'},
        {city: 'City 7'},
        {city: 'City 8'},
        {city: 'City 9'},
        {city: 'City 10'}
    ];

    return (
        <div className="container">
            <AppSearch />
            <AppForecast />
            <AppSaveList data={data} />
        </div>
    );
}

export default App;