import { connect } from "react-redux";
import { updateProfile, fetchProfile } from "../../actions/profile/profile_actions";
import EditProfileForm from "./edit_profile_form";

const mapStateToProps = ({ entities, session, errors }, { match }) => {
  return {
    profile: entities.profiles.all[session.profile.id],
    profileId: session.profile.id,
    errors: errors.profiles
  }
}


const mapDispatchToProps = dispatch => ({
  submitForm: profile => dispatch(updateProfile(profile)),
  fetchProfile: profileId => dispatch(fetchProfile(profileId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm)