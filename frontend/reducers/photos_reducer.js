import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTOS,
  REMOVE_PHOTO,
  REQUEST_PHOTOS
} from '../actions/photos/photos_actions';
import { merge } from 'lodash';

const initialState = {
  photoIds: [],
  all: {},
  popular: {},
  fresh: {},
  upcoming: {},
  editors: {},
  minimalism: {},
  music: {},
  abstract: {},
  animals: {},
  chocolate: {},
  sports: {},
}

const photosReducer = (prevState = initialState, action) => {
  Object.freeze(prevState);
  let nextState = merge({}, prevState);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      nextState.photoIds = action.photoIds
      return nextState;
    case REQUEST_PHOTOS:
      return nextState
    case RECEIVE_PHOTO:
      nextState.all[action.photo.photo.id] = action.photo.photo
      return nextState;
    case REMOVE_PHOTO:
      delete nextState[action.photoId]
      return nextState;
    default:
      return prevState;
  }
}

export default photosReducer;

