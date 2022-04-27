import { connect } from "react-redux";
import { fetchPhotos } from "../../actions/photos/photos_actions";
import PhotosIndex from "./photos_index";

const mapStateToProps = state => ({
  photos: state.entities.photos
})

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotosIndex);