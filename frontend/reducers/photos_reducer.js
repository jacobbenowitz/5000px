import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTOS,
  REMOVE_PHOTO,
  REQUEST_PHOTOS,
} from '../actions/photos/photos_actions';
import { merge } from 'lodash';

const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'

const initialState = {
  all: {},
  photoIds: [],
  popular: [],
  fresh: [],
  upcoming: [],
  editors: [],
  minimalism: [],
  music: [],
  abstract: [],
  animals: [],
  chocolate: [],
  sports: [],
  status: IDLE
}

const photosReducer = (prevState = initialState, action) => {
  Object.freeze(prevState);
  let nextState = merge({}, prevState);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      nextState.photoIds = action.photos.photoIds
      nextState.popular = action.photos.popular
      nextState.fresh = action.photos.fresh
      nextState.upcoming = action.photos.upcoming
      nextState.editors = action.photos.editors
      nextState.minimalism = action.photos.minimalism
      nextState.music = action.photos.music
      nextState.abstract = action.photos.abstract
      nextState.animals = action.photos.animals
      nextState.chocolate = action.photos.chocolate
      nextState.sports = action.photos.sports
      nextState.status = DONE
      return nextState;
    case REQUEST_PHOTOS:
      nextState.status = BUSY
      return nextState;
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

