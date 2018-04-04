import { combineReducers } from 'redux';

import { ADD_TO_CART, CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CHECKOUT_FAILURE } from '../actions';

const initialState = {
  checkoutStatus: {
    checkoutPending: false,
    error: null,
  },
  quantityById: {},
};

function checkoutStatus(state = initialState.checkoutStatus, action) {
	switch(action.type) {
		case CHECKOUT_REQUEST:
			return state;
		default:
			return state;
	}
}

function quantityById(state = initialState.quantityById, action) {
	const { productId } = action;
	switch(action.type) {
		case CHECKOUT_REQUEST:
			return state;
		case ADD_TO_CART: 
			return {
				...state,
				[productId]: (state[productId] || 0) + 1
			};
		default:
			return state;
	}
}

export default combineReducers({
	checkoutStatus,
	quantityById
});
