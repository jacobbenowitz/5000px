import {
  RECEIVE_PROFILE,
  RECEIVE_PROFILE_ERRORS
} from '../actions/profile/profile_actions';


const profilesReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_PROFILE:
      return { [action.profile.id]: action.profile };
    case RECEIVE_PROFILE_ERRORS:
      return Object.values(action.errors);
    default:
      return initialState;
  }
}

export default profilesReducer;