import React, { useEffect } from 'react';
// import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as weather from '../../redux/actions/weather';
import Location from '../../components/location';
import ErrorLocation from '../../components/errorLocation';
import Search from '../../components/search';
// import Loading from '../../components/loading';
import './index.css';

const LocationPage = () => {
    const dispatch = useDispatch();
    const {isErrLocationApi} = useSelector((state) => state.weather);
    // const {isLoading} = useSelector((state) => state.general);


    useEffect(() => {
        const getPosition = async () => {
            await dispatch(weather.getLocation());
        };
        getPosition();
    }, [ ]);

    return (
        <>
            {/* { isLoading
                ? (
                    <Loading />
                )
                : (<Location />)
            } */}
            { isErrLocationApi
                ? (
                    <>
                        <ErrorLocation />
                        <Search />
                    </>
                )
                : (
                    <Location />
                )
            }
        </>
    );
};

export default LocationPage;
