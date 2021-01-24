import * as types from '../actionTypes';

const initialState = {
    currentCity:      '',
    currentTemp:      0,
    currentId:        0,
    weather:          {},
    forecast:         [],
    searchList:       [],
    errSearchList:    false, //попробовать перевести на компонент - передавать булевый через пэйлоад
    isErrLocationApi: false,
    descLocationApi:  '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_WEATHER: {
            console.log(action.data);
            const sityName = action.data.name;
            const id = action.data.id;
            const temp = Math.floor(action.data.main.temp - 273.15);
            const weather = action.data.weather[ 0 ];

            return {
                ...state,
                currentCity:      sityName,
                currentTemp:      temp,
                currentId:        id,
                weather:          weather,
                isErrLocationApi: false,
            };
        }

        case types.SET_WEATHER_ERR_LOCATION: {
            return {
                ...state,
                isErrLocationApi:   true,
                descErrLocationApi: action.errLocation.message,
            };
        }

        case types.SET_FORECAST: {
            return {
                ...state,
                forecast: action.forecastList,
            };
        }

        case types.SET_SEARCH: {
            const searchList = action.searchData.list;

            return {
                ...state,
                searchList:    searchList,
                errSearchList: false,
            };
        }

        case types.SET_SEARCH_ERR_TRUE: {
            return {
                ...state,
                errSearchList: true,
            };
        }

        case types.SET_SEARCH_ERR_FALSE: {
            return {
                ...state,
                errSearchList: false,
            };
        }

        default:
            return {
                ...state,
            };
    }
};
