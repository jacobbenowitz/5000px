import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from '../frontend/store/store'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  
  // BEGIN TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // END TESTING
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
})