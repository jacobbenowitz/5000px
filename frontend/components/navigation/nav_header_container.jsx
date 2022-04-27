import { connect } from "react-redux";
import { logout } from "../../actions/session/session_actions";
import NavHeader from "./nav_header";

const mapStateToProps = (state) => {
  const user = state.entities.users[state.session.id];
  const profile = state.entities.profiles[state.session.profile];
  
  const navProps = {
    currentUser: user,
    profile: profile
  };

  return navProps;
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);