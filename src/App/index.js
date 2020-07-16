import React from "react";
import Routes from "./Navigators/routes";
import { Provider } from "react-redux";
import createStore from "./Stores/";
import {PersistGate} from 'redux-persist/lib/integration/react';
import Root from "./root";

const { store, persistor } = createStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
}

export default App;
