import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import rootSaga from "../Sagas/";
import storage from "redux-persist/lib/storage";
import { reducer as Startup } from "./Startup/Reducers";
import { reducer as Profile } from "./Profile/Reducers";
import { STARTUP } from "./Startup/Actions";
import { connectRouter } from "connected-react-router";

import { history } from "./CreateStore";

export default () => {
  const appReducer = combineReducers({
    startup: Startup,
    profile: Profile,
    router: connectRouter(history),
  });

  const rootReducer = (state, action) => {
    console.log("globals state", state);
    if (action.type === STARTUP.LOG_OUT) {
      storage.removeItem("persist:root");

      state = undefined;
    }

    return appReducer(state, action);
  };

  return configureStore(rootReducer, rootSaga);
};
