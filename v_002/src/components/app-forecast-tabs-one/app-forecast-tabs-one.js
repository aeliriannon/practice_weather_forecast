import { Component } from 'react';
import React from 'react';

import MemberServices from '../../services/member-services';

import './app-forecast-tabs-one.css';



class AppForecastTabsOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            forecast: null
        }

    }

    memberServices = new MemberServices();

    updateForecast = () => {
        const x = this.memberServices.getForecastOne();

        console.log(x);

    }

    componentDidMount() {
        this.updateForecast();
    }

    render() {
        const { forecast } = this.state

        console.log(forecast);
        return (
            <div id="one" className='app-forecast__one'>
                <div className="row valign-wrapper">
                    <div className="col s12" id='oneForecast'>
                        {/* <div className="row">
                            <div className="col s6">
                                <h2>{forecast.temperature}°C</h2>
                            </div>
                            <div className="col s6 right-align">
                                <p className='_description'>{forecast.description}</p>
                                <p className='_icon'>
                                    <img src={forecast.urlIcon} alt="icon" /><br />
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default AppForecastTabsOne;