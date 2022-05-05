// import { connect } from "react-redux";
// import { newLike, deleteLike } from "../../actions/likes/like_actions";
// import LikeIcon from "./like_icon";

// const mapStateToProps = (state, { match }) => {
//   return {
//     likeCount: photo.likeIds,
//     currentProfile: state.session.profile, // id
//     isLiked: Object.values(state.entities.likes).filter(like =>
//       like.likerId === state.session.profile && like.photoId === match.params.photoId),
//     likes: Object.values(state.entities.likes),
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     newLike: like => dispatch(newLike(like)),
//     deleteLike: likeId => dispatch(deleteLike(likeId)) 
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LikeIcon);