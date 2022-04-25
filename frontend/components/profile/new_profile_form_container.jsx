import { connect } from "react-redux";
import { createProfile, fetchProfile, updateProfile } from "../../actions/profile/profile_actions";
import { fetchCurrentUser } from "../../actions/session/session_actions"
import ProfileForm from "./profile_form";

const mapStateToProps = state => {
  const user = state.entities.users[state.session.id];
  const username = user.username;
  const email = user.email;
  const userId = user.id;
  const errors = state.errors.profiles
  
  return {
    currentUser: user,
    user: {
      username: username,
      email: email,
    },
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
      gender: 'Not specified',
      user_id: userId
    },
    errors: errors
  }
}

const mapDispatchToProps = dispatch => ({
  submitForm: profile => dispatch(createProfile(profile)),
  fetchUser: userId => dispatch(fetchCurrentUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)