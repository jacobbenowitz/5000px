import {
  RECEIVE_PROFILE,
  REMOVE_PROFILE
} from '../actions/profile/profile_actions';
import {
  RECEIVE_NEW_PROFILE_PHOTO,
  RECEIVE_PROFILE_PHOTO
} from '../actions/photos/profile_photos_actions';

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
    case RECEIVE_NEW_PROFILE_PHOTO:
      nextState[action.response.profileId]['profile_avatar']
        = action.response.id
      return nextState;
    case RECEIVE_PROFILE_PHOTO:
      // debugger
      nextState[action.photo.profile_id].profile_avatar = action.photo.photoUrl
      return nextState;
    default:
      return initialState;
  }
}

export default profilesReducer;