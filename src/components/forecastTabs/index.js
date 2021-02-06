import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './index.scss';

function a11yProps(index) {
    return {
        id:              `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const ForecastTabs = ({handleChange, activeIndex, data }) => {
    const weekdaysShort = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

    const monthsShort = [
        '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];

    const tabs = data.map((item) => {
        let date = new Date(item);
        let weekday = date.getDay();

        let month = item.split('-')[ 1 ].split('')[ 1 ];
        let data = item.split('-')[ 2 ];

        const label = `${weekdaysShort[ weekday ]}, ${data} ${monthsShort[ month ]}`;

        return (
            <Tab
                key = { activeIndex }
                label = { label }
                { ...a11yProps(activeIndex) }
            />
        );
    });

    return (
        <>
            <AppBar
                color = 'default'
                position = 'static'>
                <Tabs
                    aria-label = 'scrollable force tabs example'
                    indicatorColor = 'primary'
                    scrollButtons = 'on'
                    textColor = 'primary'
                    value = { activeIndex }
                    variant = 'scrollable'
                    onChange = { handleChange }>
                    {tabs}
                </Tabs>
            </AppBar>
        </>
    );
};

export default ForecastTabs;
