import { connect } from "react-redux"
import { fetchPhoto } from "../../../actions/photos/photos_actions";
import { fetchProfile } from "../../../actions/profile/profile_actions";
import ProfileShow from "./profile_show";

const mapStateToProps = (state, { match }) => {

  const userId = match.params.userId;
  const user = state.entities.users[userId];
  const profileId = user.profileId;
  const profile = state.entities.profiles[profileId];
  const photoIds = profile.photos

  return {
    user: user,
    profile: profile,
    photoIds: photoIds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: profileId => dispatch(fetchProfile(profileId)),
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);