import { combineReducers } from 'redux';
import { GET_MENU_LIST_REQUEST, GET_MENU_LIST_SUCCESS, GET_MENU_LIST_FAILURE, ADD_TO_CART, MINUS_FROM_CART } from '../actions/home';

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

function orderList(state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        [id]: (state[id] || 0) + 1
      };
    case MINUS_FROM_CART:
      return {
        ...state,
        [id]: (state[id] || 0) - 1
      };
    default:
      return state;
  }
}

export default combineReducers({
  lists,
  orderList
});
