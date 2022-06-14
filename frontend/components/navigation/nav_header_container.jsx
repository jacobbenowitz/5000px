import { connect } from "react-redux";
import { fetchCurrentUser, logout } from "../../actions/session/session_actions";
import { fetchCurrentProfile, fetchProfiles } from "../../actions/profile/profile_actions";
import NavHeader from "./nav_header";

const mapStateToProps = ({entities, session}) => {

  return {
    currentUserId: session.id,
    currentUser: session.user,
    currentProfile: session.profile
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchCurrentProfile: (id) => dispatch(fetchCurrentProfile(id))
  // fetchProfiles: () => dispatch(fetchProfiles())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);