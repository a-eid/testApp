export const LOGIN_REQUEST = '@auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@auth/LOGIN_FAILURE';
export const LOGOUT = '@auth/LOGOUT';

import api from '../api';

export const logoutAction = {type: LOGOUT};
export const logout = () => async (dispatch: any) => {
  dispatch(logoutAction);
};

export const login = ({username, password}: any) => async (dispatch: any) => {
  try {
    dispatch({type: LOGIN_REQUEST});
    const {data} = await api.login({username, password});
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({type: LOGIN_FAILURE});
  }
};
