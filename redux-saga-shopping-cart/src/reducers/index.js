import { combineReducers } from 'redux';
import products, { getProduct } from './products';
import cart from './cart';
import { ADD_TO_CART } from '../actions';

const shoppingCart = combineReducers({
	products,
	cart
});

export function getCartProducts(state) {
	console.log(state);
	return [];
}

export default function rootReducer(state, action) {
	// if (action.type === ADD_TO_CART && state.products.byId[action.productId].inventory <= 0) return state;
	return shoppingCart(state, action);
}