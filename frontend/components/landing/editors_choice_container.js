import {fetchPhotos, fetchPhoto} from '../../actions/photos/photos_actions'
import EditorsChoiceLanding from './editors_choice'
import { connect } from 'react-redux'

const mapStateToProps = ({ entities }) => {
  return {
    editorsPhotos: entities.photos.editors,
    photosStatus: entities.photos.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorsChoiceLanding)