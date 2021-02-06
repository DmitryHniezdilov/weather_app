import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as weather from '../../redux/actions/weather';
import Location from '../../components/location';
import ErrorLocation from '../../components/errorLocation';
import Search from '../../components/search';
import './index.css';

const LocationPage = () => {
    const dispatch = useDispatch();
    const {locationErrorMessage} = useSelector((state) => state.weather);

    useEffect(() => {
        const getPosition = async () => {
            await dispatch(weather.getLocation());
        };
        getPosition();
    }, [ ]);

    return (
        <>
            { locationErrorMessage === null
                ? (
                    <Location />
                )
                : (
                    <>
                        <ErrorLocation />
                        <Search />
                    </>
                )
            }
        </>
    );
};

export default LocationPage;
