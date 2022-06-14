import * as likeApiUtil from '../../util/likes_api_util'

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";

const receiveLikes = likes => {
  return {
    type: RECEIVE_LIKES,
    likes
  }
}

const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
  }
}

const deleteLike = likeId => {
  return {
    type: DELETE_LIKE,
    likeId
  }
}

// thunk actions

export const getLikes = () => dispatch => {
  return likeApiUtil.fetchLikes().then(likes =>
      dispatch(receiveLikes(likes)))
};

export const createLike = like => dispatch => {
  return (
    likeApiUtil.newLike(like).then(like =>
      dispatch(receiveLike(like)))
  )
};

export const removeLike = likeId => dispatch => {
  return (
    likeApiUtil.deleteLike(likeId).then(likeId =>
      dispatch(deleteLike(likeId)))
  )
};