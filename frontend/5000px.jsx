import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from '../frontend/store/store'
import { login } from './actions/session/session_actions';
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  
  // BEGIN TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  // END TESTING
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
})