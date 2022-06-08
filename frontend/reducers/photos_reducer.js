import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTOS,
  REMOVE_PHOTO
} from '../actions/photos/photos_actions';
import { merge } from 'lodash';

const photosReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  let nextState = merge({}, initialState);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      nextState[action.photo.photo.id] = action.photo.photo
      return nextState;
    case REMOVE_PHOTO:
      delete nextState[action.photoId]
      return nextState;
    default:
      return initialState;
  }
}

export default photosReducer;

