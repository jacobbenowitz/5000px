// require("babel-core/register");
// require("babel-polyfill");

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/configure_store';
import { persistStore } from 'redux-persist';

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
          all: {
            [window.currentProfile.id]: window.currentProfile
          },
          status: 'IDLE'
        }
      },
      session: {
        id: window.currentUser.id,
        user: window.currentUser,
        profile: window.currentProfile,
        profileId: window.currentUser.profileId
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
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // END TESTING

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
  // ReactDOM.render(<Root store={store} persistor={persistor} />, root)
})

