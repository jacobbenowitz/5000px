import { connect } from "react-redux"
import { uploadProfilePhoto } from "../../actions/photos/profile_photos_actions";
import ProfilePhotoForm from "./profile_photo_form"

const mapStateToProps = state => {
  return {
    profileId: state.session.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadProfilePhoto: formData => dispatch(uploadProfilePhoto(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhotoForm);