import { connect } from "react-redux";
import { signup } from "../../actions/session/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);