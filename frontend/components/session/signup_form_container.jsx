import { connect } from "react-redux";
import { signup } from "../../actions/session/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);