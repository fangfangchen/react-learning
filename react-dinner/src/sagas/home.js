import { takeEvery } from 'redux-saga';
import { call, put, all, fork, take, select } from 'redux-saga/effects';
import * as actions from '../actions/home';
import { homeService } from '../services/homeService';
import { getOrderList } from '../reducers/home';
import Toast from '../components/Toast';

function* home() {
  try {
    const lists = yield call(homeService.getMenuList);
    yield put(actions.getMenuListSuccess(lists));
  } catch (error) {
    yield put(actions.getMenuListFailure(error));
  }
}

function* order() {
  try {
    const orderList = yield select(getOrderList);
    const orderResult = yield call(homeService.orderDinner, orderList);
    yield call(Toast.show, orderResult.message);
    yield put(actions.orderSuccess(orderResult));
  } catch (error) {
    yield call(Toast.show, error.message);
    yield put(actions.orderFailure(error));
  }
}

export default function* homeRoot() {
  yield all([
    fork(home),
    takeEvery(actions.ORDER_DINNER_REQUEST, order)
  ]);
}
