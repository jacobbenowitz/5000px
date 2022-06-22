import { CLOSE_MODAL } from '../actions/modal/modal_actions';
import {
  RECEIVE_PROFILE,
  RECEIVE_PROFILE_ERRORS,
} from '../actions/profile/profile_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session/session_actions';


const profilesErrorReducer = (initialState = [], action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_PROFILE:
      return [];
    case RECEIVE_PROFILE_ERRORS:
      debugger
      return Object.values(action.errors);
    case CLOSE_MODAL:
      return [];
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return initialState;
  }
}

export default profilesErrorReducer;