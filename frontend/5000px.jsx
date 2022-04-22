import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from '../frontend/store/store'
import { login } from './actions/session/session_actions';
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  // check if we need to bootstrap a logged in user
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  };
  
  // BEGIN TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  // END TESTING
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
})