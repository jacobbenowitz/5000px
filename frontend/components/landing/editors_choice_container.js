import {fetchPhotos} from '../../actions/photos/photos_actions'
import EditorsChoiceLanding from './editors_choice'
import { connect } from 'react-redux'

const mapStateToProps = ({ entities }) => {
  return {
    editorsPhotos: entities.photos.editors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorsChoiceLanding)