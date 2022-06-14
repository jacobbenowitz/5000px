import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER,
  RECEIVE_USERS
} from '../actions/session/session_actions';

import { merge } from 'lodash'

const usersReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let nextState = merge({}, prevState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // todo: REVIEW USERS VIEW FOR NESTING
      if (typeof action.currentUser.id === 'undefined') {
        nextState[action.currentUser.user.id] = action.currentUser.user
        return nextState;
      } else {
        nextState[action.currentUser.id] = action.currentUser
        return nextState;
      }
      case RECEIVE_USER:
      nextState[action.user.id] = action.user
      return nextState;
    case RECEIVE_USERS:
      return action.users;
    default:
      return prevState;
  }
}

export default usersReducer;