import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTOS
} from '../actions/photos/photos_actions';

const photosReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  let nextState = Object.assign({}, initialState);

  debugger

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      return Object.assign(
        {}, nextState,
        { [action.photo.id]: action.photo }
      );
    default:
      return initialState;
  }
}

export default photosReducer;

