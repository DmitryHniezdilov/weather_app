import * as types from '../actionTypes';

const initialState = {
    isLoading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.START_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case types.FINISH_LOADING:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return {
                ...state,
            };
    }
};
