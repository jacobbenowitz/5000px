import { connect } from "react-redux"
import { uploadPhoto } from "../../actions/photos/photos_actions"
import PhotoUploadForm from "./photo_upload_form"

const mapStateToProps = state => {
  return {
    userId: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadPhoto: formData => dispatch(uploadPhoto(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUploadForm);