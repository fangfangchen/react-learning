import { combineReducers } from 'redux';
import { GET_MENU_LIST_REQUEST, GET_MENU_LIST_SUCCESS, GET_MENU_LIST_FAILURE } from '../actions/home';

function lists(state = [], action) {
  switch (action.type) {
    case GET_MENU_LIST_REQUEST:
      return state;
    case GET_MENU_LIST_SUCCESS:
      return action.lists || [1];
    case GET_MENU_LIST_FAILURE:
      return action.error;
    default:
      return state;
  }
}

export default combineReducers({
  lists
});
