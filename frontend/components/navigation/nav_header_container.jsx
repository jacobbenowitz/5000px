import { connect } from "react-redux";
import { fetchCurrentUser, logout } from "../../actions/session/session_actions";
import { fetchCurrentProfile, fetchProfiles } from "../../actions/profile/profile_actions";
import NavHeader from "./nav_header";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({entities, session}) => {

  return {
    currentUserId: session?.id,
    currentUser: session.user,
    currentProfileId: session.profileId,
    currentProfile: entities.profiles.all[session.profile?.id],
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchCurrentProfile: (id) => dispatch(fetchCurrentProfile(id))
  // fetchProfiles: () => dispatch(fetchProfiles())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavHeader));