import {
  RECEIVE_CURRENT_PROFILE,
  RECEIVE_PROFILE,
  RECEIVE_PROFILES,
  REMOVE_PROFILE
} from '../actions/profile/profile_actions';
import {
  RECEIVE_NEW_PROFILE_PHOTO,
  RECEIVE_PROFILE_PHOTO
} from '../actions/photos/profile_photos_actions';
import {
  RECEIVE_PHOTO
} from '../actions/photos/photos_actions';

const profilesReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_PROFILE:
      return Object.assign({}, nextState,
        { [action.profile.id]: action.profile });
    case RECEIVE_PROFILES:
      return action.profiles;
    case REMOVE_PROFILE:
      delete nextState[action.profileId];
      return nextState;
    case RECEIVE_CURRENT_PROFILE:
      return Object.assign({}, nextState,
        { [action.profile.id]: action.profile });
    default:
      return initialState;
  }
}

export default profilesReducer;