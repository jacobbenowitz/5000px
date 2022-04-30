import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photos/photos_actions";
import SinglePhotoShow from "./single_photo_show"

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId))
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePhotoShow);