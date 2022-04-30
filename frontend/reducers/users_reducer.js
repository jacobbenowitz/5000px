import { RECEIVE_PHOTO } from '../actions/photos/photos_actions';
import {
  RECEIVE_CURRENT_USER,
} from '../actions/session/session_actions';

const usersReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // added logic to test for nesting, still not 100% on how to avoid the nesting difference between login(user) and signup(user)
      //////////////////////////////////////////
      // REFACTOR WITH SELECTOR
      //////////////////////////////////////////
      if (typeof action.currentUser.id === 'undefined') {
        // debugger
        return Object.assign(
          {}, nextState,
          { [action.currentUser.user.id]: action.currentUser.user }
        );
      } else {
        // debugger
        return Object.assign(
          {}, nextState,
          { [action.currentUser.id]: action.currentUser }
        );
      }
    case RECEIVE_PHOTO:
      debugger
      return Object.assign({}, nextState,
        { [action.user.id]: action.user });
    default:
      return initialState;
  }
}

export default usersReducer;