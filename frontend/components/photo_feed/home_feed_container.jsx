import { connect } from "react-redux"
import HomeFeed from "./home_feed"

const mapStateToProps = state => {
  currentUser = state.entities.users[state.session.id]
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchProfiles: () => dispatch(fetchProfiles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed);