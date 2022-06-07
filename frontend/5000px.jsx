require("babel-core/register");
require("babel-polyfill");

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {fetchPhoto, fetchPhotos} from './actions/photos/photos_actions';
import configureStore from './store/configure_store';
import { persistStore } from 'redux-persist';
import { login, logout, signup } from '../frontend/actions/session/session_actions'
import { deleteLike, newLike } from './actions/likes/like_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store, persistor;
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

  // persistor = persistStore(store);
  
  // BEGIN TESTING
  // window.persistor = persistor;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchPhoto = fetchPhoto;
  window.fetchPhotos = fetchPhotos;
  window.logout = logout
  window.login = login
  window.signup = signup
  window.newLike = newLike
  window.deleteLike = deleteLike
  // END TESTING
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
  // ReactDOM.render(<Root store={store} persistor={persistor} />, root)
})

