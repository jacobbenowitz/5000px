import { connect } from "react-redux"
import {
  getFollows,
  createFollow,
  removeFollow
} from "../../../actions/follows/follows_actions";
import {
  fetchPhoto,
  fetchPhotos
} from "../../../actions/photos/photos_actions";
import {
  fetchProfile,
  fetchProfiles,
  updateProfile,
  updateProfilePhoto
} from "../../../actions/profile/profile_actions";
import ProfileShow from "./profile_show";

const mapStateToProps = ({entities, session}, { match }) => {

  const profile = entities.profiles.all[match.params.profileId];
  const user = entities.users[profile?.user_id];
  return {
    profileId: match.params.profileId,
    isCurrentProfile: session.profile.id == match.params.profileId,
    profile: profile,
    user: user,
    currentProfile: entities.profiles.all[session.profile.id],
    profilesStatus: entities.profiles.status,
    allFollows: entities.follows
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: profileId => dispatch(fetchProfile(profileId)),
    fetchProfiles: () => dispatch(fetchProfiles()),
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    fetchPhotos: () => dispatch(fetchPhotos()),
    updateProfile: profileData => dispatch(updateProfile(profileData)),
    updateProfilePhoto: (formData, profileId) =>
      dispatch(updateProfilePhoto(formData, profileId)),
    createFollow: follow => dispatch(createFollow(follow)),
    removeFollow: followId => dispatch(removeFollow(followId)),
    getFollows: () => dispatch(getFollows())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);