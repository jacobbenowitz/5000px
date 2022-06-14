import {
  RECEIVE_LIKE,
  RECEIVE_LIKES,
  DELETE_LIKE
} from "../actions/likes/like_actions";

import { merge } from 'lodash'

const likesReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  let nextState = merge({}, initialState);
  
  switch (action.type) {
    case RECEIVE_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      nextState[action.like.id] = action.like;
      return nextState;
    case DELETE_LIKE:
      delete nextState[action.likeId];
      return nextState;
    default:
      return initialState;
  }
}

export default likesReducer;