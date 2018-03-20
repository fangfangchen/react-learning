import { takeLatest } from 'redux-saga';
import { take } from 'redux-saga/effects';

import { login } from './login';

function* rootSaga() {
  yield [
    takeLatest('USER_LOGIN', login)
  ];
}

export default rootSaga;
