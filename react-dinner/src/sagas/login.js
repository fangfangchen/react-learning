//import { takeLatest } from 'redux-saga';
import { call, put, select, take, all, fork } from 'redux-saga/effects';
import { loginService } from '../services/loginService';
import * as actions from '../actions/login';
import { getLoginInfo } from '../reducers/login';

function* login() {
  try {
    const loginInfo = yield select(getLoginInfo);
    const data = yield call(loginService.userLogin, loginInfo.username, loginInfo.password);
    yield put(actions.loginSuccess(data));
  } catch (error) {
    yield put(actions.loginFailure(error));
  }
}

function* watchLogin() {
  while (true) {
    yield take(actions.LOGIN_REQUEST);
    yield call(login);
  }
}

export default function* loginRoot() {
  yield all([
    fork(watchLogin)
  ]);
}
