import { connect } from "react-redux"
import { fetchPhoto, fetchPhotos } from "../../actions/photos/photos_actions"
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
    photosStatus: entities.photos.status,
    profilesStatus: entities.profiles.status,
    allProfiles: entities.profiles,
    category: match.params.category
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    fetchProfiles: () => dispatch(fetchProfiles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoCollection)