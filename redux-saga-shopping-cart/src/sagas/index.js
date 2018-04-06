import { call, put, all, select, fork, takeEvery, take } from 'redux-saga/effects';

import * as actions from '../actions';
import { api } from '../services';
import { getCart } from '../reducers';

export function* getAllProducts() {
  const products = yield call(api.getProducts);
  yield put(actions.receiveProducts(products));
}

export function* watchGetProducts() {
	yield takeEvery(actions.GET_ALL_PRODUCTS, getAllProducts);
}

export function* checkout() {
	try {
		const cart = yield select(getCart);
		yield call(api.buyProducts, cart);
		yield put(actions.checkoutSuccess(cart));
	} catch(error) {
		yield put(actions.checkoutFailure(error));
	}
}

export function* watchCheckout() {
	while(true) {
		yield take(actions.CHECKOUT_REQUEST);
		yield call(checkout);
	}
}

export default function* root() {
	yield all([
		fork(getAllProducts),
		fork(watchGetProducts),
		fork(watchCheckout)
	])
}