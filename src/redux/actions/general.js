import * as types from '../actionTypes';

export const startLoading = () => ({ type: types.START_LOADING });
export const finishLoading = () => ({ type: types.FINISH_LOADING });
export const setErrNotSupported = () => ({ type: types.SET_ERR_NOT_SUPPORTED });
export const setErrPermDenied = () => ({ type: types.SET_ERR_PERMISSION_DENIED });
export const setErrPosUnavailable = () => ({ type: types.SET_ERR_POSITION_UNAVAILABLE });
export const setErrTimeout = () => ({ type: types.SET_ERR_TIMEOUT });
export const setErrUnknown = () => ({ type: types.SET_ERR_UNKNOWN });
