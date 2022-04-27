import { connect } from "react-redux"
import { uploadPhoto } from "../../actions/photos/photos_actions"
import ProfilePhotoForm from "./profile_photo_form"

const mapStateToProps = state => {
  return {
    profileId: state.session.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadPhoto: formData => dispatch(uploadPhoto(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhotoForm);