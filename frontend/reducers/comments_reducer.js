import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  REMOVE_COMMENT
} from '../actions/comments/comment_actions'

import { merge } from 'lodash'

const commentsReducer = (prevState = {}, action) => {
  Object.freeze(prevState)
  let nextState = merge({}, prevState)
  
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return nextState;
    case REMOVE_COMMENT:
      delete nextState[action.commentId];
      return nextState;
    default:
      return prevState;
  }
}

export default commentsReducer;