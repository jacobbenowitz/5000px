import { CLOSE_MODAL } from '../actions/modal/modal_actions';
import {
  LOGOUT_CURRENT_USER,
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session/session_actions';

const sessionErrorsReducer = (initialState = [], action) => {
  Object.freeze(initialState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      debugger
      return Object.values(action.errors);
    case CLOSE_MODAL:
      return []
    case LOGOUT_CURRENT_USER:
      return []
    default:
      return initialState;
  }
}

export default sessionErrorsReducer;