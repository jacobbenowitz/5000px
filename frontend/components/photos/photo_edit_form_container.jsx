import { connect } from "react-redux";
import { openModal } from "../../actions/modal/modal_actions";
import { uploadPhoto } from "../../actions/photos/photos_actions";
import PhotoUploadForm from "./photo_upload_form";

const mapStateToProps = (state, ownProps) => {
  const { session, errors, profiles } = state;
  const { match } = ownProps;
  return {
    photoId: match.params.photoId,
    profileId: session.profile,
    errors: errors.photos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadPhoto: formData => dispatch(uploadPhoto(formData)),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUploadForm);