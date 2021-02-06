import * as types from '../actionTypes';

const initialState = {
    isLoading: true,
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
