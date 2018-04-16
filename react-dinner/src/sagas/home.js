import { takeEvery } from 'redux-saga';
import { call, put, all, fork, take } from 'redux-saga/effects';
import * as actions from '../actions/home';
import { homeService } from '../services/homeService';

function* home() {
  try {
    const lists = yield call(homeService.getMenuList);
    console.log('-----asf------');
    console.log(lists);
    yield put(actions.getMenuListSuccess(lists));
  } catch (error) {
    yield put(actions.getMenuListFailure(error));
  }
}

export default function* homeRoot() {
  yield all([
    fork(home),
    take(actions.GET_MENU_LIST_REQUEST, home)
  ]);
}
