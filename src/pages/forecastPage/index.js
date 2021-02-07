import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { withRouter } from 'react-router';
import ForecastTabs from '../../components/forecastTabs';
import ForecastTabsPanel from '../../components/forecastTabsPanel';
import * as weatherActions from '../../redux/actions/weather';
import './index.scss';

const ForecastPage = ({history}) => {
    const dispatch = useDispatch();
    const {currentId, currentCity, forecastList} = useSelector((state) => state.weather);

    const [ activeIndex, setActiveIndex ] = useState(0);
    const [ forecastTabsList, setForecastTabsList ] = useState([]);
    const [ forecastTabPanel, setForecastTabPanel ] = useState([]);

    const handleChange = (event, index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        if (!currentId) {
            history.push('/');

            return;
        }
        const getForecast = async () => {
            await dispatch(weatherActions.fetchForecastById(currentId));
        };
        getForecast();
    }, [ ]);

    useEffect(() => {
        if (forecastList.length) {
            const getForecastTabsList = forecastList.map(({date}) =>  date);
            const getForecastTabPanel = forecastList.map(({items}) => [ ...items ]);
            setForecastTabsList(getForecastTabsList);
            setForecastTabPanel(getForecastTabPanel);
        }
    }, [ forecastList ]);

    return !!forecastList.length && (
        <div className = 'forecast'>
            <h2 className = ''>{`Weather in ${currentCity} now`}</h2>
            <ForecastTabs
                activeIndex = { activeIndex }
                data = { forecastTabsList }
                handleChange = { handleChange }
            />
            <ForecastTabsPanel
                activeIndex = { activeIndex }
                data = { forecastTabPanel[ activeIndex ] }
            />
        </div>
    );
};

export default withRouter(ForecastPage);
