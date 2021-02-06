import React from 'react';
import './index.scss';

const ForecastTabsPanel = ({activeIndex, data}) => {
    console.log(data);

    const forecastItem = [];

    for (let dt_txt in data) {
        if (data.hasOwnProperty(dt_txt)) {
            // console.log(data[ dt_txt ]);
            forecastItem.push(
                <div  className = 'forecast-tabs-content__item'>
                    <div className = 'forecast-tabs-content__time'>
                        <span>{data[ dt_txt ].dt_txt.split(' ')[ 1 ].split(':')[ 0 ]}</span>
                        <sup>00</sup>
                    </div>
                    <img
                        alt = ''
                        src = { `http://openweathermap.org/img/wn/${data[ dt_txt ].weather[ 0 ].icon}@2x.png` }
                    />
                    <div className = 'forecast-tabs-content__time'>
                        <span>{ Math.floor(data[ dt_txt ].main.temp - 273.15)} &deg;C</span>
                    </div>
                </div>,
            );
        }
    }
    // переделать див на юл-ли

    return (
        <div
            aria-labelledby = { `scrollable-force-tab-${activeIndex}` }
            className = 'forecast-tabs-content'
            id = { `scrollable-force-tabpanel-${activeIndex}` }
            role = 'tabpanel'>
            <div className = 'forecast-tabs-content__row'>
                { forecastItem }
            </div>
        </div>
    );
};

export default ForecastTabsPanel;
