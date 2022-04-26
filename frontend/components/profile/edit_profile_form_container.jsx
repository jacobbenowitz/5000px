import { connect } from "react-redux";
import { updateProfile, fetchProfile } from "../../actions/profile/profile_actions";
import EditProfileForm from "./edit_profile_form";

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.id;
  // debugger
  return {
    profile: state.entities.users[currentUser].profile,
    currentUser: currentUser,
    errors: state.errors.profiles
  }
}

const mapDispatchToProps = dispatch => ({
  submitForm: profile => dispatch(updateProfile(profile)),
  fetchProfile: userId => dispatch(fetchProfile(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm)