import { connect } from "react-redux"
import {
  fetchPhoto,
  fetchPhotos
} from "../../../actions/photos/photos_actions";
import {
  fetchProfile,
  updateProfile,
  updateProfilePhoto
} from "../../../actions/profile/profile_actions";
import ProfileShow from "./profile_show";

const mapStateToProps = (state, { match }) => {

  const profile = state.entities.profiles.all[match.params.profileId];
  const user = state.entities.users[profile?.user_id];
  return {
    profileId: match.params.profileId,
    isCurrentProfile: state.session.profile.id == match.params.profileId,
    profile: profile,
    user: user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: profileId => dispatch(fetchProfile(profileId)),
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    fetchPhotos: () => dispatch(fetchPhotos()),
    updateProfile: profileData => dispatch(updateProfile(profileData)),
    updateProfilePhoto: (formData, profileId) =>
      dispatch(updateProfilePhoto(formData, profileId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);