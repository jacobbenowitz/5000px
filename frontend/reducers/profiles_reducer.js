import {
  RECEIVE_CURRENT_PROFILE,
  RECEIVE_PROFILE,
  RECEIVE_PROFILES,
  REMOVE_PROFILE
} from '../actions/profile/profile_actions';


const profilesReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_PROFILE:
      return Object.assign({}, nextState,
        { [action.profile.id]: action.profile });
    case RECEIVE_PROFILES:
      // debugger
      return action.profiles;
    case REMOVE_PROFILE:
      delete nextState[action.profileId];
      return nextState;
    default:
      return initialState;
  }
}

export default profilesReducer;