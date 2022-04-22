import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session/session_actions';

const _clearErrors = []

const sessionErrorsReducer = (initialState = _clearErrors, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, _clearErrors)
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return initialState;
  }
}

export default sessionErrorsReducer;