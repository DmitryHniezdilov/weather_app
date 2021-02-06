import React from 'react';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import './index.scss';

const ErrorLocation = () => {
    const { locationErrorMessage } = useSelector((state) => state.weather);

    return (
        <>
            <Paper
                className = 'error-location__paper'>
                <ErrorOutlineIcon color = 'error'/>
                <span
                    className = 'error-location__message'>Error Geolocation Position : { locationErrorMessage }
                </span>
            </Paper>
        </>
    );
};

export default ErrorLocation;
