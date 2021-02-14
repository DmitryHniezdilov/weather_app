import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const ForecastItem = ({time, icon, temp}) => {
    return (
        <div  className = 'forecast-tabs-panel__item'>
            <div className = 'forecast-tabs-panel__time'>
                <span>{time}</span>
                <sup>00</sup>
            </div>
            <img
                alt = ''
                src = { `http://openweathermap.org/img/wn/${icon}@2x.png` }
            />
            <div className = 'forecast-tabs-panel__time'>
                <span>{temp} &deg;C</span>
            </div>
        </div>
    );
};

ForecastItem.prototype = {
    time: PropTypes.string,
    icon: PropTypes.string,
    temp: PropTypes.number,
};

const ForecastTabsPanel = ({activeIndex, data = []}) => {
    const forecastDaily = data.map((item, index) => {
        const time = item.dt_txt.split(/[ :]/)[ 1 ];
        const icon = item.weather[ 0 ].icon;
        const temp = Math.floor(item.main.temp - 273.15);

        return (
            <ForecastItem
                icon = { icon }
                key = { index }
                temp = { temp }
                time = { time }
            />
        );
    });

    return !!data.length && (
        <div
            aria-labelledby = { `scrollable-force-tab-${activeIndex}` }
            className = 'forecast-tabs-panel'
            id = { `scrollable-force-tabpanel-${activeIndex}` }
            role = 'tabpanel'>
            <div className = 'forecast-tabs-panel__row'>
                { forecastDaily }
            </div>
        </div>
    );
};

ForecastTabsPanel.prototype = {
    activeIndex: PropTypes.number,
    data:        PropTypes.array,
};

export default ForecastTabsPanel;
