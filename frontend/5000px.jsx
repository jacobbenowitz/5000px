require("babel-core/register");
require("babel-polyfill");

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';
import Root from './components/root';
import { updateProfile, createProfile, fetchProfile } from './util/profile_api_util';


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
      session: {
        id: window.currentUser.id,
        // profile: window.currentUser.profile.id
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  };
  
  // BEGIN TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.updateProfile = updateProfile;
  // window.createProfile = createProfile;
  // window.fetchProfile = fetchProfile;
  // END TESTING
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
})