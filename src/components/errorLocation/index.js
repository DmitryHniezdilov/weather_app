import React from 'react';
// import React from 'react';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// import { Link } from 'react-router-dom';
import './index.scss';

// сделать выпадающий список городов searchResult
const ErrorLocation = () => {
    const { descErrLocationApi } = useSelector((state) => state.weather);

    return (
        <>
            <Paper
                className = 'error-location__paper'>
                <ErrorOutlineIcon color = 'error'/>
                <span
                    className = 'error-location__message'>Error Geolocation Position : { descErrLocationApi }
                </span>
            </Paper>
        </>
    );
};

export default ErrorLocation;
