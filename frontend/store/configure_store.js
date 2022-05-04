import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from "../reducers/root_reducer";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const enhancers = [applyMiddleware(thunk, logger)];


// const configureStore = (preloadedState = {}) => (
//   createStore(persistedReducer, preloadedState,
//     compose(...enhancers))
// );

const configureStore = (preloadedState = {}) => {
  // debugger
  return createStore(persistedReducer, preloadedState,
    applyMiddleware(thunk, logger))
}

export default configureStore;

// export default (preloadedState) => {
//   let store = configureStore(preloadedState);
//   let persistor = persistStore(store);
//   return { store, persistor };
// }


// const configureStore = (preloadedState = {}) => (
//   createStore(rootReducer, preloadedState,
//     applyMiddleware(thunk, logger))
// );
