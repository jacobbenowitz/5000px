import { connect } from "react-redux";
import { login } from "../../actions/session/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);