import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTOS,
  REMOVE_PHOTO
} from '../actions/photos/photos_actions';

const photosReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      // debugger
      return action.photos;
    case RECEIVE_PHOTO:
      // debugger
      return Object.assign(
        {}, nextState,
        { [action.photo.photo.id]: action.photo.photo }
      );
    case REMOVE_PHOTO:
      delete nextState[action.photoId]
      return nextState;
    default:
      return initialState;
  }
}

export default photosReducer;

