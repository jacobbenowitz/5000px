import { connect } from "react-redux"
import { fetchPhotos } from "../../actions/photos/photos_actions"
import { fetchProfiles } from "../../actions/profile/profile_actions"
import DiscoverFeed from "./discover_feed"


const mapStateToProps = ({entities}, { match }) => {
  const photos = Object.values(entities.photos);
  return {
    allPhotos: photos,
    allProfiles: entities.profiles,
    page: match.params.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchProfiles: () => dispatch(fetchProfiles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverFeed)