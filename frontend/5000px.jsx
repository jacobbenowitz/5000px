require("babel-core/register");
require("babel-polyfill");

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';
import Root from './components/root';
import {fetchPhotos} from './actions/photos/photos_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  // check if we need to bootstrap a logged in user
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        },
        profiles: {
          [window.currentProfile.id]: window.currentProfile
        }
      },
      session: {
        id: window.currentUser.id,
        profile: window.currentProfile.id
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    delete window.currentProfile;
  } else {
    store = configureStore();
  };
  
  // BEGIN TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchPhotos = fetchPhotos;
  // END TESTING
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
})

