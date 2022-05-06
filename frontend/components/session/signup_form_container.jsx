import { connect } from "react-redux";
import { signup, login, receiveSessionErrors } from "../../actions/session/session_actions";
import SignupForm from "./signup_form";
import { openModal } from "../../actions/modal/modal_actions";

const mapStateToProps = (state) => {
  // debugger
  return {
    errors: state.errors.session,
    currentUserId: state.session.id
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user)),
  loginGuest: user => dispatch(login(user)),
  receiveErrors: errors => dispatch(receiveSessionErrors(errors)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);