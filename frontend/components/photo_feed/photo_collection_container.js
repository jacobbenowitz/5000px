import { connect } from "react-redux"
import { fetchPhotos } from "../../actions/photos/photos_actions"
import { fetchProfiles } from "../../actions/profile/profile_actions"
import PhotoCollection from "./photo_collection"


const mapStateToProps = ({ entities }, { match }) => {
  return {
    minimalismPhotos: entities.photos.minimalism,
    musicPhotos: entities.photos.music,
    abstractPhotos: entities.photos.abstract,
    animalsPhotos: entities.photos.animals,
    chocolatePhotos: entities.photos.chocolate,
    sportsPhotos: entities.photos.sports,
    allProfiles: entities.profiles,
    category: match.params.category
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchProfiles: () => dispatch(fetchProfiles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoCollection)