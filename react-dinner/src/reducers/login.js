import { combineReducers } from 'redux';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, USERNAME_CHANGE, PASSWORD_CHANGE } from '../actions';

export function getLoginInfo(state) {
  return state.login;
}

function username(state = '', action) {
  switch (action.type) {
    case USERNAME_CHANGE:
      return action.username;
    default:
      return state;
  }
}

function password(state = '', action) {
  switch (action.type) {
    case PASSWORD_CHANGE:
      return action.password;
    default:
      return state;
  }
}

function loginStatus(state = 2, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return 1;
    case LOGIN_SUCCESS:
      return action.data;
    case LOGIN_FAILURE:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  username,
  password,
  loginStatus
});
