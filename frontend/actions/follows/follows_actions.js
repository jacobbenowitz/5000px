import * as followsApiUtil from "../../util/follows_api_util"

export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS"
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW"
export const DELETE_FOLLOW = "DELETE_FOLLOW"

const receiveFollows = follows => {
  return {
    type: RECEIVE_FOLLOWS,
    follows
  }
}

const receiveFollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  }
}

const deleteFollow = follow => {
  return {
    type: DELETE_FOLLOW,
    follow
  }
}

// thunk actions

export const getFollows = () => dispatch => {
  return followsApiUtil.getFollows().then(follows =>
    dispatch(receiveFollows(follows))
  )
}

export const createFollow = follow => dispatch => {
  return followsApiUtil.newFollow(follow).then(follow =>
    dispatch(receiveFollow(follow)))
}

export const removeFollow = followId => dispatch => {
  return followsApiUtil.deleteFollow(followId).then(follow =>
    dispatch(deleteFollow(follow))
  )
}