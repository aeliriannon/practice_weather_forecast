import AppSaveListItem from '../app-save-list-item/app-save-list-item';

import './app-save-list.css';

const AppSaveList = ({data}) => {

    const elements = data.map(item => {
        return (
            <AppSaveListItem {...item} />
        );
    });

    return (
        <div className="row">
            <div className="col s12">
                <ul className="collection with-header app-save">
                    <li className="collection-header">
                        <h4>История запросов</h4>
                    </li>
                    {elements}
                </ul>
            </div>
        </div>

    );
}

export default AppSaveList;
