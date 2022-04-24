import { connect } from "react-redux";
import { createProfile } from "../../actions/profile/profile_actions";
import { fetchUser } from "../../actions/users/users_actions";
import ProfileForm from "./profile_form";

const mapStateToProps = state => {
  const user = state.entities.users[state.session.id];
  const username = user.username;
  const email = user.email;
  const userId = user.id;
  
  return {
    currentUser: user,
    profile: {
      username: username,
      email: email,
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
      about: '',
      user_id: userId
    },
    formType: 'Create profile'
  }
}

const mapDispatchToProps = dispatch => ({
  submitForm: profile => dispatch(createProfile(profile)),
  fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)