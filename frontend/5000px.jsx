import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from '../frontend/store/store'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // BEGIN TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // END TESTING

  ReactDOM.render(<h1>Hello World!</h1>, root)
})