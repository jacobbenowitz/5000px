import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session/session_actions';

const _nullSession = {
  id: null
}

const sessionReducer = (initialState = _nullSession, action) => {
  Object.freeze(initialState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let nextState = Object.assign({}, initialState);
      nextState.id = action.user.id
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return initialState;
  }
}

export default sessionReducer;

