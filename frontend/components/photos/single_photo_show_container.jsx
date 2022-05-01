import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photos/photos_actions";
import { selectPhoto, selectProfileFromUser, selectUserById, selectUserFromPhoto } from "../../reducers/selectors";
import SinglePhotoShow from "./single_photo_show";
import { fetchUser } from "../../actions/session/session_actions";
import { fetchProfile } from "../../actions/profile/profile_actions";

// const mapStateToProps = (state, { match }) => {
//   const photoId = match.params.photoId;
//   debugger
//   const photo = selectPhoto(state.entities, photoId);
//   debugger
//   const user = selectUserFromPhoto(state.entities, photo);
//   const profile = selectProfileFromUser(state.entities, user);
//   /// needed for likes
//   const currentUser = selectUserById(state.entities, state.session.id);
//   return {
//     profile: profile,
//     photoId: photoId,
//     photo: photo,
//     user: user,
//     currentUser: currentUser
//   }
// }

const mapStateToProps = (state, { match }) => {
  const photoId = match.params.photoId;
  const photo = state.entities.photos[photoId];
  debugger
  const userId = photo.user_id;
  const user = state.entities.users[userId];
  const profile = state.entities.profiles[user.profileId];
  /// needed for likes
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  return {
    photoId: photoId,
    profile: profile,
    photo: photo,
    user: user,
    currentUser: currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchProfile: profileId => dispatch(fetchProfile(profileId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePhotoShow);