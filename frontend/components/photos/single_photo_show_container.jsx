import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photos/photos_actions";
import { selectPhoto, selectProfileById, selectUserById, selectUserFromPhoto } from "../../reducers/selectors";
import SinglePhotoShow from "./single_photo_show";
import { fetchUser } from "../../actions/session/session_actions";
import { fetchProfile } from "../../actions/profile/profile_actions";


const mapStateToProps = (state, { match }) => {
  const photoId = match.params.photoId;
  const photo = selectPhoto(state.entities, photoId);
  const profile = photo === {} ? {} : selectProfileById(
    state.entities, photo.profile_id);
  const user = selectUserById(state.entities, profile.user_id);
  debugger
  const isCurrentProfile = profile.id === state.session.profile;
  const currentProfile = state.session.profile;

  debugger
  return {
    photoId: photoId,
    profile: profile,
    user: user,
    photo: photo,
    isCurrentProfile: isCurrentProfile,
    currentProfile: currentProfile,
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