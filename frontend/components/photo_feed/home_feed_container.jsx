import { connect } from "react-redux";
import HomeFeed from "./home_feed";
import { asArray } from "../../reducers/selectors";

const mapStateToProps = state => {
  debugger
  return {
    photos: asArray(state.entities),
    users: state.entities.users,
    profiles: state.entities.profiles,
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchProfiles: () => dispatch(fetchProfiles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed);