import { connect } from "react-redux";
import { fetchPhotos, fetchPhoto } from "../../actions/photos/photos_actions";
import PhotosIndex from "./photos_index";

const mapStateToProps = state => {
  const photos = Object.values(state.entities.photos);
  const users = state.entities.users;
  const profiles = state.entities.profiles;
  debugger
  return {
    photos: photos,
    users: users,
    profiles: profiles
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotosIndex);