import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_USERS,
} from '../actions/session/session_actions';

import {
  RECEIVE_CURRENT_PROFILE
} from '../actions/profile/profile_actions';

import { merge } from 'lodash'

const _nullSession = {
  id: null,
  user: null,
  profile: null,
  profileId: null,
}

const sessionReducer = (prevState = _nullSession, action) => {
  Object.freeze(prevState);
  let nextState = merge({}, prevState)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (typeof action.currentUser.id === 'undefined') {
        nextState.id = action.currentUser.user.id
        nextState.user = action.currentUser.user
        return nextState;
      } else {
        nextState.id = action.currentUser.id
        nextState.user = action.currentUser
        return nextState;
      };
    case RECEIVE_CURRENT_PROFILE:
      nextState.profile = action.profile
      nextState.profileId = action.profile.id
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return prevState;
  }
}

export default sessionReducer;

