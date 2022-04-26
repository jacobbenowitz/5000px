import {
  RECEIVE_PROFILE,
  REMOVE_PROFILE
} from '../actions/profile/profile_actions';


const profilesReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_PROFILE:
      debugger
      return Object.assign({}, nextState, { [action.profile.id]: action.profile });
    case REMOVE_PROFILE:
      delete nextState[action.profileId];
      return nextState;
    default:
      return initialState;
  }
}

export default profilesReducer;