import * as commentApiUtil from '../../util/comment_api_util'

export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const REMOVE_COMMENT = "REMOVE_COMMENT"

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
})

// thunk actions

export const getComments = () => dispatch => {
  return commentApiUtil.getComments().then(comments => 
    dispatch(receiveComments(comments)))
}

export const createComment = comment => dispatch => {
  return commentApiUtil.newComment(comment).then(comment =>
    dispatch(receiveComment(comment)))
}

export const deleteComment = commentId => dispatch => {
  return commentApiUtil.deleteComment(commentId).then(comment =>
    dispatch(removeComment(comment.id)))
}