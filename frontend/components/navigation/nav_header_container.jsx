import { connect } from "react-redux";
import { fetchCurrentUser, logout } from "../../actions/session/session_actions";
import { fetchCurrentProfile, fetchProfiles } from "../../actions/profile/profile_actions";
import NavHeader from "./nav_header";

const mapStateToProps = (state) => {

  return {
    currentUser: state.entities.users[state.session.id],
    currentProfile: state.entities.profiles[state.session.profile],
    currentUserId: state.session.id,
    currentProfileId: state.session.profile
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  fetchCurrentProfile: () => dispatch(fetchCurrentProfile())
  // fetchProfiles: () => dispatch(fetchProfiles())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);