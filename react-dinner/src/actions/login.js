export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const USERNAME_CHANGE = 'USERNAME_CHANGE';
export const PASSWORD_CHANGE = 'PASSWORD_CHANGE';

export const login = () => ({ type: LOGIN_REQUEST });

export const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, data });

export const loginFailure = (data) => ({ type: LOGIN_FAILURE, data });

export const userNameChange = (username) => ({ type: USERNAME_CHANGE, username });

export const passWordChange = (password) => ({ type: PASSWORD_CHANGE, password });
