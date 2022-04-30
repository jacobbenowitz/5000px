import { connect } from "react-redux"
import { fetchPhoto, fetchPhotos } from "../../../actions/photos/photos_actions";
import { fetchProfile } from "../../../actions/profile/profile_actions";
import { selectProfilePhotos } from "../../../reducers/selectors";
import ProfileShow from "./profile_show";

const mapStateToProps = (state, { match }) => {

  const profileId = match.params.profileId;
  const profile = state.entities.profiles[profileId];
  debugger
  
  return {
    profile: profile,
    photos: selectProfilePhotos(state.entities, profile.photoIds)
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