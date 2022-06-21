import { connect } from "react-redux";
import { signup, login, receiveSessionErrors, clearSessionErrors } from "../../actions/session/session_actions";
import { createProfile, updateProfile } from "../../actions/profile/profile_actions";
import SignupForm from "./signup_form";
import { openModal } from "../../actions/modal/modal_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    currentUserId: state.session.id,
    currentProfileId: state.session.profileId,
    history: ownProps.history
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup(user)),
  loginGuest: user => dispatch(login(user)),
  sessionMessage: errors => dispatch(receiveSessionErrors(errors)),
  openModal: modal => dispatch(openModal(modal)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  createProfile: profile => dispatch(createProfile(profile)),
  updateProfile: profile => dispatch(updateProfile(profile))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);