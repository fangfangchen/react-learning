import { all } from 'redux-saga/effects';
import login from './login';
import home from './home';

function* rootSaga() {
  yield all([
    login(),
    home()
  ]);
}

export default rootSaga;
