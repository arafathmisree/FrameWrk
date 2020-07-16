import {combineReducers} from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';
import storage from 'redux-persist/lib/storage'
import {reducer as Startup} from './Startup/Reducers'
import {STARTUP} from './Startup/Actions';

export default () => {
  const appReducer = combineReducers({
    startup: Startup,
  });

  const rootReducer = (state, action) => {
    if (action.type === STARTUP.LOG_OUT) {
      storage.removeItem('persist:root');

      state = undefined;
    }

    return appReducer(state, action);
  };

  return configureStore(rootReducer, rootSaga);
};
