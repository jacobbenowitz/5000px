import { connect } from "react-redux";
import HomeFeed from "./home_feed";
import { asArray } from "../../reducers/selectors";
import { fetchProfiles } from "../../actions/profile/profile_actions";
import { fetchPhotos } from "../../actions/photos/photos_actions";
import { fetchUsers } from "../../actions/session/session_actions";

const mapStateToProps = state => {
  debugger
  return {
    photos: asArray(state.entities),
    users: state.entities.users,
    profiles: state.entities.profiles,
    currentUser: state.entities.profiles[state.session.profile]
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