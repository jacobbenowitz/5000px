import { connect } from "react-redux";
import HomeFeed from "./home_feed";
import { buildGridGalleryProps, asArray } from "../../reducers/selectors";
import { fetchProfiles } from "../../actions/profile/profile_actions";
import { fetchPhotos } from "../../actions/photos/photos_actions";
import { fetchUsers } from "../../actions/session/session_actions";

const mapStateToProps = ({entities, session}) => {
  debugger
  const photos = asArray(entities);
  
  return {
    photos: buildGridGalleryProps(photos),
    users: entities.users,
    profiles: entities.profiles,
    currentProfile: entities.profiles[session.profile]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchProfiles: () => dispatch(fetchProfiles()),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed);