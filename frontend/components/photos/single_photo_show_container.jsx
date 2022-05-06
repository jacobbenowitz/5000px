import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photos/photos_actions";
import { selectPhoto, selectProfileById, selectUserById, selectUserFromPhoto } from "../../reducers/selectors";
import SinglePhotoShow from "./single_photo_show";
import { fetchUser } from "../../actions/session/session_actions";
import { fetchProfile } from "../../actions/profile/profile_actions";
import { newLike, deleteLike, getLikes } from "../../actions/likes/like_actions";


const mapStateToProps = (state, { match }) => {
  const photoId = match.params.photoId;
  const photo = state.entities.photos[photoId];
  // const profile = photo === {} ? {} : selectProfileById(
  //   state.entities, photo.profile_id);
  // const user = selectUserById(state.entities, profile.user_id);
  const profile = state.entities.profiles[photo.profile_id];
  const user = state.entities.users[photo.userId];
  // debugger
  const isCurrentProfile = photo.profile_id === state.session.profile;
  const currentProfile = state.session.profile;
  

  return {
    photo: photo,
    photoProfile: profile,
    photoId: photoId,
    likes: Object.values(state.entities.likes).filter(like => like.photoId === photoId),
    isLiked: Object.values(state.entities.likes).filter(like =>
      like.likerId === currentProfile &&
      like.photoId === photoId),
    user: user,
    isCurrentProfile: isCurrentProfile,
    currentProfile: currentProfile,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    getLikes: () => dispatch(getLikes()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchProfile: profileId => dispatch(fetchProfile(profileId)),
    newLike: like => dispatch(newLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePhotoShow);