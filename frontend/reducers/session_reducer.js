import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session/session_actions';

const _nullSession = {
  id: null
}

const sessionReducer = (initialState = _nullSession, action) => {
  Object.freeze(initialState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let nextState = Object.assign(
        {}, initialState, { id: action.currentUser.id })
      return nextState;
    // case RECEIVE_CURRENT_PROFILE
    // return { profile: action.profile.id }
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return initialState;
  }
}

export default sessionReducer;

