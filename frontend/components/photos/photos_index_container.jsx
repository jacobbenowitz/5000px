import { connect } from "react-redux";
import { fetchPhotos, fetchPhoto } from "../../actions/photos/photos_actions";
import PhotosIndex from "./photos_index";


// MOVED TO HOME FEED CONTAINER
// const mapStateToProps = state => {
//   const photos = Object.values(state.entities.photos);
//   const users = state.entities.users;
//   const profiles = state.entities.profiles;
//   return {
//     photos: photos,
//     users: users,
//     profiles: profiles
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   fetchPhoto: photoId => dispatch(fetchPhoto(photoId))
// })

// export default connect(null, mapDispatchToProps)(PhotosIndex);