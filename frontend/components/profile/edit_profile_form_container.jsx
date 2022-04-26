import { connect } from "react-redux";
import { updateProfile, fetchProfile } from "../../actions/profile/profile_actions";
import ProfileForm from "./profile_form";

const mapStateToProps = state => {
  const user = state.entities.users[state.session.id];
  const userId = user.id;
  
  return {
    profile: {
      first_name: '',
      last_name: '',
      profile_avatar: '',
      profile_banner: '',
      website_url: '',
      instagram_url: '',
      lenses: '',
      cameras: '',
      birthday: '',
      city: '',
      country: '',
      about: '',
      gender: '',
      user_id: userId
    },
    user: user
  }
}

const mapDispatchToProps = dispatch => ({
  submitForm: profile => dispatch(updateProfile(profile)),
  fetchProfile: userId => dispatch(fetchProfile(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)