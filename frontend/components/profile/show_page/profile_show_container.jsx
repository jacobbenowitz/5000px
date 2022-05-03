import { connect } from "react-redux"
import { fetchPhoto, fetchPhotos } from "../../../actions/photos/photos_actions";
import { fetchProfile } from "../../../actions/profile/profile_actions";
import { selectProfilePhotos, selectUserById } from "../../../reducers/selectors";
import ProfileShow from "./profile_show";

const mapStateToProps = (state, { match }) => {
  const profileId = match.params.profileId;
  const isCurrentProfile = state.session.profile === profileId;
  const profile = state.entities.profiles[profileId] || {};
  const user = selectUserById(state.entities, profile.user_id) || {};
  debugger
  
  return {
    profileId: profileId,
    profile: profile,
    user: user,
    isCurrentProfile: isCurrentProfile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: profileId => dispatch(fetchProfile(profileId)),
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    fetchPhotos: () => dispatch(fetchPhotos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);