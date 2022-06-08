import { RECEIVE_PHOTO } from '../actions/photos/photos_actions';
import {
  RECEIVE_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS
} from '../actions/session/session_actions';

const usersReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      /// REVIEW USERS VIEW FOR NESTING
      if (typeof action.currentUser.id === 'undefined') {
        return Object.assign(
          {}, nextState,
          { [action.currentUser.user.id]: action.currentUser.user }
        );
      } else {
        return Object.assign(
          {}, nextState,
          { [action.currentUser.id]: action.currentUser }
        );
      }
    case RECEIVE_USER:
      return Object.assign({}, nextState,
        { [action.user.id]: action.user });
    case RECEIVE_USERS:
      return action.users;
    default:
      return initialState;
  }
}

export default usersReducer;