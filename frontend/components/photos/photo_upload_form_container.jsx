import { connect } from "react-redux";
import { openModal } from "../../actions/modal/modal_actions";
import { uploadPhoto } from "../../actions/photos/photos_actions";
import PhotoUploadForm from "./photo_upload_form";

const mapStateToProps = state => {
  return {
    profileId: state.session.profile.id,
    errors: state.errors.photos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadPhoto: formData => dispatch(uploadPhoto(formData)),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUploadForm);