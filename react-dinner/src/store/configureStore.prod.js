import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  store.run = sagaMiddleware.run;

  return store;
}
