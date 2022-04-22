import {
  RECEIVE_CURRENT_USER,
} from '../actions/session/session_actions';

const defaultState = {}

const usersReducer = (initialState = defaultState, action) => {
  Object.freeze(initialState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let nextState = Object.assign({}, initialState);
      return Object.assign(nextState, { [action.user.id]: action.user });
    default:
      return initialState;
  }
}

export default usersReducer;