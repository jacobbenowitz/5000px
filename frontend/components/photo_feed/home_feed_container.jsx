import { connect } from "react-redux";
import HomeFeed from "./home_feed";
import { buildGridGalleryProps } from "../../reducers/selectors";
import { fetchProfiles } from "../../actions/profile/profile_actions";
import { fetchPhoto, fetchPhotos } from "../../actions/photos/photos_actions";
import { fetchUsers } from "../../actions/session/session_actions";
import { getLikes } from "../../actions/likes/like_actions";

const mapStateToProps = ({ entities, session }) => {

  return {
    photoIds: entities.photos?.photoIds,
    allPhotos: entities.photos?.all,
    users: entities.users,
    likes: entities.likes,
    profiles: entities.profiles.all,
    currentProfile: entities.profiles[session.profile],
    photosStatus: entities.photos.status,
    profilesStatus: entities.profiles.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    fetchProfiles: () => dispatch(fetchProfiles()),
    fetchUsers: () => dispatch(fetchUsers()),
    getLikes: () => dispatch(getLikes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed);