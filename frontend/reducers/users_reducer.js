import {
  RECEIVE_CURRENT_USER,
} from '../actions/session/session_actions';

const usersReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(
        {}, nextState,
        { [action.currentUser.id]: action.currentUser }
      );
    default:
      return initialState;
  }
}

export default usersReducer;