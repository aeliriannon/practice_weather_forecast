import './app-search.css';


const AppSearch = () => {
    return (
        <div className="row app-search">
            <div className="input-field col s12">
                <input id="autocomplite" placeholder="City" />
                <i className="material-icons">search</i>
            </div>
        </div>
    );
}

export default AppSearch;