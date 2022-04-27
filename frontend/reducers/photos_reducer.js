import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTOS
} from '../actions/photos/photos_actions';

const photosReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      return Object.assign(
        {}, nextState,
        { [action.currentUser.id]: action.currentUser }
      );
    default:
      return initialState;
  }
}

export default photosReducer;