import { newLike, deleteLike } from "../../actions/likes/like_actions";

const mapStateToProps = (state, { match }) => {

  return {
    photoId: match.params.photoId,
    likeCount: photo.likeIds,
    currentProfile: state.session.profile, // id
    isLiked: Object.values(state.entities.likes).filter(like =>
      like.likerId === state.session.profile && like.photoId === match.params.photoId),
    likes: Object.values(state.entities.likes),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newLike = like => dispatch(newLike(like)),
    deleteLike = likeId => dispatch(deleteLike(likeId)) 
  }
}