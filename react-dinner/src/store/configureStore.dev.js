import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

// 开启redux-devtools
const reduxToolExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = reduxToolExtension || compose;

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware, logger))
  );
  store.run = sagaMiddleware.run;

  return store;
}
