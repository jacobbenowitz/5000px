import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTOS,
  REMOVE_PHOTO,
  REQUEST_PHOTOS,
} from '../actions/photos/photos_actions';
import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comments/comment_actions';

import { merge } from 'lodash';
import { DELETE_LIKE, RECEIVE_LIKE } from '../actions/likes/like_actions';

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
    case RECEIVE_COMMENT:
      let comments = nextState.all[action.comment.photo_id].comments
      nextState.all[action.comment.photo_id]
        .comments = comments.concat(action.comment)
      return nextState;
    case REMOVE_COMMENT:
      let nextComments = nextState.all[action.comment.photo_id]
        .comments.filter(comment => comment.id !== action.comment.id)
      nextState.all[action.comment.photo_id].comments = nextComments
      return nextState;
    case RECEIVE_LIKE:
      let nextLikes = nextState.all[action.like.photo_id]
        .likes.concat([action.like])
      nextState.all[action.like.photo_id].likes = nextLikes
      return nextState;
    case DELETE_LIKE:
      let filteredLikes = nextState.all[action.like.photo_id]
        .likes.filter(like => like.id !== action.like.id)
      nextState.all[action.like.photo_id].likes = filteredLikes
      return nextState;
    default:
      return prevState;
  }
}

export default photosReducer;

