import { connect } from "react-redux"
import {
  fetchPhoto,
  fetchPhotos,
  uploadPhoto
} from "../../../actions/photos/photos_actions";
import { fetchProfile, updateProfile, updateProfilePhoto } from "../../../actions/profile/profile_actions";
import { selectProfilePhotos, buildGalleryArray, buildGridGalleryProps } from "../../../reducers/selectors";
import ProfileShow from "./profile_show";

const mapStateToProps = ({entities, session}, { match }) => {
  const profileId = match.params.profileId;
  const isCurrentProfile = session.profile == profileId;
  const profile = entities.profiles[profileId];
  const user = entities.users[profile.user_id];

  return {
    profileId: profileId,
    profile: profile,
    user: user,
    photos: selectProfilePhotos(entities.photos, profile.photoIds),
    isCurrentProfile: isCurrentProfile
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