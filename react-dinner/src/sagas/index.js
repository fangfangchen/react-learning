import { all } from 'redux-saga/effects';
import login from './login';

function* rootSaga() {
  yield all([
    login()
  ]);
}

export default rootSaga;
