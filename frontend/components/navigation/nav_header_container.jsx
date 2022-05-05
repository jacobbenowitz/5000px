import { connect } from "react-redux";
import { logout } from "../../actions/session/session_actions";
import { fetchProfile } from "../../util/profile_api_util";
import NavHeader from "./nav_header";

const mapStateToProps = (state) => {
  const user = state.entities.users[state.session.id];
  const profile = state.entities.profiles[state.session.profile];
  
  return {
    currentUser: user,
    currentProfile: profile,
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchProfile: () => dispatch(fetchProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);