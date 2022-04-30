import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photos/photos_actions";
import SinglePhotoShow from "./single_photo_show"

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
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePhotoShow);