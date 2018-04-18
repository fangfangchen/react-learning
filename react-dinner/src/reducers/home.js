import { combineReducers } from 'redux';
import { GET_MENU_LIST_REQUEST, GET_MENU_LIST_SUCCESS, GET_MENU_LIST_FAILURE, ADD_TO_CART, MINUS_FROM_CART, ORDER_DINNER_SUCCESS, ORDER_DINNER_FAILURE } from '../actions/home';

export const getOrderList = (state) => {
  return state.home.orderList;
};

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
    case ORDER_DINNER_SUCCESS:
      return {};
    default:
      return state;
  }
}

function orderDinner(state = {}, action) {
  switch (action.type) {
    case ORDER_DINNER_FAILURE:
      return {
        ...state,
        ...action.data
      };
    case ORDER_DINNER_SUCCESS:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
}

export default combineReducers({
  lists,
  orderList
});
