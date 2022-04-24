import {
  RECEIVE_CURRENT_USER,
} from '../actions/session/session_actions';
import { RECEIVE_USER } from '../actions/users/users_actions';

const usersReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(nextState, { [action.user.id]: action.user });
    case RECEIVE_USER:
      return Object.assign(nextState, { [action.user.id]: action.user });
    default:
      return initialState;
  }
}

export default usersReducer;