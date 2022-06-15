import { connect } from "react-redux"
import { fetchPhoto, fetchPhotos } from "../../actions/photos/photos_actions"
import { fetchProfiles } from "../../actions/profile/profile_actions"
import { getLikes } from "../../actions/likes/like_actions"
import LikedPhotosFeed from "./liked_photos_feed"


const mapStateToProps = ({ entities, session }, { match, history }) => {
  return {
    photosStatus: entities.photos.status,
    profilesStatus: entities.profiles.status,
    allPhotos: entities.photos.all,
    allProfiles: entities.profiles,
    currentProfile: entities.profiles.all[session.profile.id],
    history: history
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    fetchProfiles: () => dispatch(fetchProfiles()),
    getLikes: () => dispatch(getLikes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikedPhotosFeed)