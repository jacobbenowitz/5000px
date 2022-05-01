import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photos/photos_actions";
import { selectPhoto, selectProfileFromUser, selectUserById, selectUserFromPhoto } from "../../reducers/selectors";
import SinglePhotoShow from "./single_photo_show";
import { fetchUser } from "../../actions/session/session_actions";
import { fetchProfile } from "../../actions/profile/profile_actions";


const mapStateToProps = (state, { match }) => {
  const photoId = match.params.photoId;
  const photo = selectPhoto(state.entities, photoId);
  const userId = photo ? photo.user_id : null;
  const user = userId ? selectUserById(state.entities, userId) : {};
  const profile = user ? selectProfileFromUser(state.entities, user) : {};
  const currentUserId = state.session.id;
  const currentUser = selectUserById(state.entities, currentUserId);
  debugger
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