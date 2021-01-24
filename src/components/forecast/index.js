import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import * as weatherActions from '../../redux/actions/weather';
import './index.scss';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            aria-labelledby = { `scrollable-force-tab-${index}` }
            hidden = { value !== index }
            id = { `scrollable-force-tabpanel-${index}` }
            role = 'tabpanel'
            { ...other }>
            {value === index && (
                <Box p = { 3 }>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index:    PropTypes.any.isRequired,
    value:    PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id:              `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:        1,
        width:           '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const Forecast = () => {
    const {currentCity, currentTemp, weather, currentId} = useSelector((state) => state.weather);
    console.log(currentCity, currentTemp, weather);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [ value, setValue ] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const getForecast = async () => {
            await dispatch(weatherActions.fetchForecastById(currentId));
        };
        getForecast();
    }, [ ]);

    return (
        // <>
        //      <h1 className = 'forecast__wrap'>{currentCity}</h1>
        //     <div className = 'forecast__wrap-temp'>
        //         {/* <h1>{`${weather.temp} &#176; &deg; U+00B0 C`}</h1> */}
        //         <h2>{currentTemp}</h2>
        //         <h2>&deg;C</h2>
        //     </div>
        //     <h3 className = 'forecast__wrap'>{weather.description}</h3>
        //     <img
        //         alt = { weather.description }
        //         className = 'forecast__wrap'
        //         src = { `http://openweathermap.org/img/wn/${weather.icon}@2x.png` }
        //     />
        //  </>
        <div className = { classes.root }>
            <h2 className = ''>{`Weather in ${currentCity} now`}</h2>
            <AppBar
                color = 'default'
                position = 'static'>
                <Tabs
                    aria-label = 'scrollable force tabs example'
                    indicatorColor = 'primary'
                    scrollButtons = 'on'
                    textColor = 'primary'
                    value = { value }
                    variant = 'scrollable'
                    onChange = { handleChange }>
                    <Tab
                        label = 'Now'
                        { ...a11yProps(0) }
                    />
                    <Tab
                        label = 'Item Two'
                        { ...a11yProps(1) }
                    />
                    <Tab
                        label = 'Item Three'
                        { ...a11yProps(2) }
                    />
                </Tabs>
            </AppBar>
            <TabPanel
                index = { 0 }
                value = { value }>
                <>
                    <div className = 'forecast__wrap-temp'>
                        {/* <h1>{`${weather.temp} &#176; &deg; U+00B0 C`}</h1> */}
                        <h2>{currentTemp}</h2>
                        <h2>&deg;C</h2>
                    </div>
                    <img
                        alt = { weather.description }
                        className = 'forecast__wrap'
                        src = { `http://openweathermap.org/img/wn/${weather.icon}@2x.png` }
                    />
                    <h3 className = 'forecast__wrap'>{weather.description}</h3>
                </>
            </TabPanel>
            <TabPanel
                index = { 1 }
                value = { value }>
                Item Two
            </TabPanel>
            <TabPanel
                index = { 2 }
                value = { value }>
                Item Three
            </TabPanel>
        </div>
    );
};

export default Forecast;
