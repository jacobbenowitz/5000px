import {
  RECEIVE_CURRENT_USER,
} from '../actions/session/session_actions';

const usersReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      return Object.assign(
        {}, nextState,
        { [action.currentUser.user.id]: action.currentUser.user }
      );
    default:
      return initialState;
  }
}

export default usersReducer;