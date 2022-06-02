const AppSaveListItem = ({ city }) => {
    return (
        <li className="collection-item">
            <div>
                {city}
                <div className="secondary-content">
                    <a href="#!">
                        <i className="material-icons">replay</i>
                    </a>
                    <a href="#!">
                        <i className="material-icons _delete">delete_forever</i>
                    </a>
                </div>
            </div>
        </li>
    );
}

export default AppSaveListItem;