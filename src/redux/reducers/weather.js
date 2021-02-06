import * as types from '../actionTypes';

const initialState = {
    currentCity:          '',
    currentTemp:          0,
    currentId:            0,
    weather:              {},
    forecastList:         [],
    searchList:           [],
    isErrSearchList:      false,
    locationErrorMessage: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_WEATHER: {
            const sityName = action.data.name;
            const id = action.data.id;
            const temp = Math.floor(action.data.main.temp - 273.15);
            const weather = action.data.weather[ 0 ];

            return {
                ...state,
                currentCity:          sityName,
                currentTemp:          temp,
                currentId:            id,
                weather:              weather,
                locationErrorMessage: null,
            };
        }

        case types.SET_WEATHER_ERR_LOCATION: {
            return {
                ...state,
                locationErrorMessage: action.errLocation.message,
            };
        }

        case types.SET_FORECAST: {
            return {
                ...state,
                forecastList: action.forecastList,
            };
        }

        case types.SET_SEARCH: {
            const searchList = action.searchData.list;

            return {
                ...state,
                searchList:      searchList,
                isErrSearchList: false,
            };
        }

        case types.SET_SEARCH_ERR_TRUE: {
            return {
                ...state,
                searchList:      [],
                isErrSearchList: true,

            };
        }

        case types.SET_SEARCH_ERR_FALSE: {
            return {
                ...state,
                isErrSearchList: false,
            };
        }

        default:
            return {
                ...state,
            };
    }
};
