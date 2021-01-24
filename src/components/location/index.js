import React from 'react';
import { useSelector } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './index.scss';

const Location = () => {
    const {currentCity} = useSelector((state) => state.weather);

    // добавить лоадинг, условный рендеринг
    return (
        <>
            <h2 className = 'location__title'>Your sity - {currentCity} ?</h2>
            <div className = 'location__link-wrap'>
                <Button
                    color = 'primary'
                    component = { Link }
                    key = 'forecast'
                    to = '/forecast'>
                    Yes
                </Button>
                <Button
                    component = { Link }
                    key = 'search'
                    to = '/search'>
                    Search other city
                </Button>
            </div>
        </>
    );
};

export default Location;
