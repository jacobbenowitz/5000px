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
      nextState.photoIds = action.photoIds
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

