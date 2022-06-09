import { connect } from "react-redux";
import HomeFeed from "./home_feed";
import { buildGridGalleryProps } from "../../reducers/selectors";
import { fetchProfiles } from "../../actions/profile/profile_actions";
import { fetchPhotos } from "../../actions/photos/photos_actions";
import { fetchUsers } from "../../actions/session/session_actions";
import { getLikes } from "../../actions/likes/like_actions";

const mapStateToProps = ({ entities, session }) => {

  const photos = Object.values(entities.photos);

  return {
    photos: photos,
    allPhotos: entities.photos,
    users: entities.users,
    likes: entities.likes,
    profiles: entities.profiles,
    currentProfile: entities.profiles[session.profile],
    status: entities.photos.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchProfiles: () => dispatch(fetchProfiles()),
    fetchUsers: () => dispatch(fetchUsers()),
    getLikes: () => dispatch(getLikes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed);