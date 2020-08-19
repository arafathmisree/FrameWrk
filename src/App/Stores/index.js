import {combineReducers} from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';
import storage from 'redux-persist/lib/storage'
import {reducer as Startup} from './Startup/Reducers'
import {STARTUP} from './Startup/Actions';
import { connectRouter } from 'connected-react-router'

import {history} from './CreateStore'

export default () => {
  const appReducer = combineReducers({
    startup: Startup,
    router: connectRouter(history),
  });

  const rootReducer = (state, action) => {
    if (action.type === STARTUP.LOG_OUT_SUCCESS) {
      storage.removeItem('persist:root');

      state = undefined;
    }

    return appReducer(state, action);
  };

  return configureStore(rootReducer, rootSaga);
};
