import {
  RECEIVE_LIKE,
  RECEIVE_LIKES,
  DELETE_LIKE
} from "../actions/likes/like_actions";

import { merge } from 'lodash'
import { DELETE_FOLLOW, RECEIVE_FOLLOW } from "../actions/follows/follows_actions";

const likesReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let nextState = merge({}, prevState);
  
  switch (action.type) {
    case RECEIVE_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      nextState[action.like.id] = action.like;
      return nextState;
    case DELETE_LIKE:
      delete nextState[action.like.id];
      return nextState;
    case RECEIVE_FOLLOW:
      // for the receipent of the follow
      if (Object.values(nextState).filter(like => like.liker_id ===
        action.follow.followee_id).length > 0) {
          
        let likeIds = Object.values(nextState)
          .filter(like => like.liker_id === action.follow.followee_id)
          .map(like => like.id)
        likeIds.forEach(id => nextState[id].followers =
          nextState[id].followers.concat(action.follow))
      }
      return nextState;
    case DELETE_FOLLOW:
      if (Object.values(nextState).filter(like =>
        like.liker_id === action.follow.followee_id).length > 0) {
        
        let likeIds = Object.values(nextState)
          .filter(like => like.liker_id === action.follow.followee_id)
          .map(like => like.id)
        likeIds.forEach(id => nextState[id].followers =
          nextState[id].followers.filter(follow =>
            follow.id !== action.follow.id))
      }
      return nextState;
    default:
      return prevState;
  }
}

export default likesReducer;