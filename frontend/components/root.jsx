import React from "react";
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import App from "./App";
import { PersistGate } from 'redux-persist/integration/react';

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={<h2>Loading...</h2>} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
);

export default Root;