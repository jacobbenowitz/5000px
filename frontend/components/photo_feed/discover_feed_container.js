import { connect } from "react-redux"
import { fetchPhoto, fetchPhotos } from "../../actions/photos/photos_actions"
import { fetchProfiles } from "../../actions/profile/profile_actions"
import DiscoverFeed from "./discover_feed"


const mapStateToProps = ({entities}, { match }) => {
  return {
    photosStatus: entities.photos.status,
    profilesStatus: entities.profiles.status,
    allPhotos: entities.photos.all,
    popularPhotos: entities.photos.popular,
    freshPhotos: entities.photos.fresh,
    upcomingPhotos: entities.photos.upcoming,
    editorsPhotos: entities.photos.editors,
    allProfiles: entities.profiles,
    page: match.params.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    fetchProfiles: () => dispatch(fetchProfiles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverFeed)