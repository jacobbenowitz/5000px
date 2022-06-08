import {
  RECEIVE_PROFILE,
  RECEIVE_PROFILE_ERRORS,
} from '../actions/profile/profile_actions';


const profilesErrorReducer = (initialState = [], action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_PROFILE:
      return [];
    case RECEIVE_PROFILE_ERRORS:
      debugger
      return Object.values(action.errors);
    default:
      return initialState;
  }
}

export default profilesErrorReducer;