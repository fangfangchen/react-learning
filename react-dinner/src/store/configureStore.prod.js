import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();


export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);

  return store;
};
