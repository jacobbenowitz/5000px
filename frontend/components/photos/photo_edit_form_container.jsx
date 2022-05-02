import { connect } from "react-redux";
import { openModal } from "../../actions/modal/modal_actions";
import { updatePhoto } from "../../actions/photos/photos_actions";
import { selectPhotoById } from "../../reducers/selectors";
import PhotoEditForm from "./photo_edit_form";
import { fetchPhoto } from "../../actions/photos/photos_actions";

const mapStateToProps = (state, ownProps) => {
  const { session, errors, entities } = state;
  debugger
  const photoId = ownProps.match.params.photoId;
  const photo = selectPhotoById(entities, photoId) || {};

  return {
    photoId: photoId,
    photo: photo,
    title: photo.title,
    description: photo.description,
    location: photo.location,
    camera: photo.camera,
    lens: photo.lens,
    photoUrl: photo.photoUrl,
    profileId: session.profile,
    errors: errors.photos,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updatePhoto: photoData => dispatch(updatePhoto(photoData)),
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoEditForm);