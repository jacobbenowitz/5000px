import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_USERS,
} from '../actions/session/session_actions';

import {
  RECEIVE_CURRENT_PROFILE
} from '../actions/profile/profile_actions';

const _nullSession = {
  id: null,
  profile: null,
}

const sessionReducer = (initialState = _nullSession, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (typeof action.currentUser.id === 'undefined') {
        debugger
        return (Object.assign({}, nextState,
          {
            id: action.currentUser.user.id,
            profile: action.currentUser.user.profileId
          }));
      } else {
        // debugger
        return (Object.assign({}, nextState,
          {
            id: action.currentUser.id,
            profile: action.currentUser.profileId
          }));
      };
    case RECEIVE_CURRENT_PROFILE:
      debugger
      return (
        Object.assign({}, initialState,
          { profile: action.profile.id })
      );
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return initialState;
  }
}

export default sessionReducer;

