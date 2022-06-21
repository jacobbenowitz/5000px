import { connect } from "react-redux";
import { signup, login, receiveSessionErrors, clearSessionErrors } from "../../actions/session/session_actions";
import SignupForm from "./signup_form";
import { openModal } from "../../actions/modal/modal_actions";
import { createProfile } from "../../actions/profile/profile_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUserId: state.session.id
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup(user)),
  loginGuest: user => dispatch(login(user)),
  sessionMessage: errors => dispatch(receiveSessionErrors(errors)),
  openModal: modal => dispatch(openModal(modal)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  createProfile: (profile) => dispatch(createProfile(profile))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);