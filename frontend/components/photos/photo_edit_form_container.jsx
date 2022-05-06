import { connect } from "react-redux";
import { openModal } from "../../actions/modal/modal_actions";
import { updatePhoto, deletePhoto } from "../../actions/photos/photos_actions";
import { selectPhotoById } from "../../reducers/selectors";
import PhotoEditForm from "./photo_edit_form";
import { fetchPhoto } from "../../actions/photos/photos_actions";

const mapStateToProps = (state, ownProps) => {
  const photoId = ownProps.match.params.photoId;
  const photo = state.entities.photos[photoId] || {};
  
  // debugger
   /// NOT WORKING
  return {
    photoId: photoId,
    photo: photo,
    profileId: state.session.profile,
    errors: state.errors.photos,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updatePhoto: photoId => dispatch(updatePhoto(photoId)),
    deletePhoto: photoId => dispatch(deletePhoto(photoId)),
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoEditForm);