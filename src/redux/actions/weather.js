import * as types from '../actionTypes';
import * as Api from '../../api/api';

export const getLocation = () => (dispatch) => {
    const successLocation = async (pos) => {
        const crd = {
            lat:  pos.coords.latitude,
            long: pos.coords.longitude,
        };
        const resData = await Api.findCityByCoordinates(crd.lat, crd.long);
        // console.log(resData);
        dispatch({type: types.SET_WEATHER, data: resData});
        dispatch({type: types.FINISH_LOADING});
    };

    const showError = (error) => {
        console.log(error);
        dispatch({type: types.SET_WEATHER_ERR_LOCATION, errLocation: error});
    };

    // export const setItemToWeather = (item) => (dispatch) => {
    //     dispatch({type: types.SET_WEATHER, data: item});
    // };

    dispatch({type: types.START_LOADING});
    navigator.geolocation.getCurrentPosition(successLocation, showError);
};

export const fetchCitiesListByName = (cityName) => async (dispatch) => {
    try {
        // dispatch({type: types.START_LOADING});
        const resData = await Api.findSearchList(cityName);
        const isFindCity = resData.count >= 1;
        if (isFindCity) {
            console.log(resData.list);
            dispatch({type: types.SET_SEARCH, searchData: resData});
        } else {
            dispatch({type: types.SET_SEARCH_ERR_TRUE});
        }
        // dispatch({type: types.FINISH_LOADING});
    } catch (error) {
        throw error;
    }
};

export const fetchForecastById = (cityId) => async (dispatch) => {
    try {
        // dispatch({type: types.START_LOADING});
        const resData = await Api.findForecastById(cityId);
        console.log(resData);
        dispatch({type: types.SET_FORECAST, forecastList: resData.list});
        // dispatch({type: types.FINISH_LOADING});
    } catch (error) {
        throw error;
    }
};

export const setItemToWeather = (item) => (dispatch) => {
    dispatch({type: types.SET_WEATHER, data: item});
};

export const setErrSearchListToFalse = () => ({ type: types.SET_SEARCH_ERR_FALSE });
