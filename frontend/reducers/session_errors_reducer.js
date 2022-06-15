import { CLOSE_MODAL } from '../actions/modal/modal_actions';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session/session_actions';

const sessionErrorsReducer = (initialState = [], action) => {
  Object.freeze(initialState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return Object.values(action.errors);
    case CLOSE_MODAL:
      return []
    default:
      return initialState;
  }
}

export default sessionErrorsReducer;