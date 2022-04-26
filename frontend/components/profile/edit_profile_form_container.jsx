import { connect } from "react-redux";
import { updateProfile, fetchProfile } from "../../actions/profile/profile_actions";
import EditProfileForm from "./edit_profile_form";

const mapStateToProps = (state, ownProps) => {
  const profileId = state.session.profile;
  const profileProps = {
    profile: state.entities.profiles[profileId],
    errors: state.errors.profiles
  }

  return profileProps;
}


const mapDispatchToProps = dispatch => ({
  submitForm: profile => dispatch(updateProfile(profile)),
  fetchProfile: profileId => dispatch(fetchProfile(profileId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm)