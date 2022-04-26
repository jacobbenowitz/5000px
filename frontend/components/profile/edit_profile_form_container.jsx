import { connect } from "react-redux";
import { updateProfile, fetchProfile } from "../../actions/profile/profile_actions";
import EditProfileForm from "./edit_profile_form";

const mapStateToProps = (state, ownProps) => ({
  profile: state.entities.profiles[ownProps.match.params.profileId],
  errors: state.errors.profiles
})

const mapDispatchToProps = dispatch => ({
  submitForm: profile => dispatch(updateProfile(profile)),
  fetchProfile: profileId => dispatch(fetchProfile(profileId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm)