import { call, put, select , take} from 'redux-saga/effects';
import loginService from '../services/loginService';

export function* login() {
  console.log('------login saga------');
  console.log({...arguments});
  const loginAccount = yield select((state) => state);
  console.log(loginAccount);
  try {
    const userLogin = yield call(loginService.userLogin, username, password);
    yield put({
      type: 'IS_LOGIN',
      payload: userLogin
    });
  } catch(error) {
    yield put({
      type: 'IS_ERROR',
      error
    });
  }
}
