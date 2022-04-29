import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session/session_actions';

import {
  RECEIVE_CURRENT_PROFILE
} from '../actions/profile/profile_actions';

const _nullSession = {
  id: null
}

const sessionReducer = (initialState = _nullSession, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (typeof action.currentUser.id === 'undefined') {
        debugger
        return (Object.assign({}, nextState,
          { id: action.currentUser.user.id }));
      } else {
        debugger
        return (Object.assign({}, nextState,
          { id: action.currentUser.id }));
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

