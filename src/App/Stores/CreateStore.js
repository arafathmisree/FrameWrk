import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import logger from 'redux-logger';
import  {PersistConfig} from '../Config'
 
/**
 * This import defaults to localStorage for web and AsyncStorage for react-native.
 *
 * Keep in mind this storage *is not secure*. Do not use it to store sensitive information
 * (like API tokens, private and sensitive data, etc.).
 *
 * If you need to store sensitive information, use redux-persist-sensitive-storage.
 * @see https://github.com/CodingZeal/redux-persist-sensitive-storage
 */


const persistConfig = PersistConfig

export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));
  enhancers.push(applyMiddleware(logger));

  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, compose(...enhancers));
  const persistor = persistStore(store);

  // Kick off the root saga
  sagaMiddleware.run(rootSaga);

  return {store, persistor};
};
