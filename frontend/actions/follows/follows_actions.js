import * as followApiUtil from '../../util/follows_api_util'

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

const deleteFollow = followId => {
  return {
    type: DELETE_FOLLOW,
    followId
  }
}

// thunk actions

export const getFollows = () => dispatch => {
  return followApiUtil.fetchFollows().then(follows => 
    dispatch(receiveFollows(follows)))
}

export const createFollow = follow => dispatch => {
  return followApiUtil.newFollow(follow).then(res => 
    dispatch(receiveFollow(res.follow)))
}

export const removeFollow = followId => dispatch => {
  return followApiUtil.deleteFollow(followId).then(res => 
    dispatch(deleteFollow(res.followId)))
}