import { connect } from "react-redux";
import { fetchProfile } from "../../actions/profile/profile_actions";
import { login } from "../../actions/session/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user)),
  fetchProfile: user => dispatch(fetchProfile(user.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);