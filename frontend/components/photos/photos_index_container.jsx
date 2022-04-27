import { connect } from "react-redux";
import { fetchPhotos } from "../../actions/photos/photos_actions";
import PhotosIndex from "./photos_index";

const mapStateToProps = state => {
  let photos = Object.values(state.entities.photos)

  return {
    photos: photos
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotosIndex);