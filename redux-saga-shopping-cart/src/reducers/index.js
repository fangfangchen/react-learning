import { combineReducers } from 'redux';
import products, { getProduct } from './products';
import cart, { getAddedIds, getQuantity } from './cart';
import { ADD_TO_CART } from '../actions';

export function getCart(state) {
	return state.cart;
}

const shoppingCart = combineReducers({
	products,
	cart
});

export function getCartProducts(state) {
	return getAddedIds(state.cart).map(id => ({
		...getProduct(state.products, id),
		quantity: getQuantity(state.cart, id)
	}));
}

export function getTotal(state) {
	return getAddedIds(state.cart).reduce((total, id) => 
		(total + getProduct(state.products, id).price * getQuantity(state.cart, id)), 0).toFixed(2);
}

export default function rootReducer(state, action) {
	// if (action.type === ADD_TO_CART && state.products.byId[action.productId].inventory <= 0) return state;
	return shoppingCart(state, action);
}