import { connect } from "react-redux";
import { updateProfile } from "../../actions/profile/profile_actions";
import { fetchCurrentUser } from "../../actions/session/session_actions"
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
    }
  }
}

const mapDispatchToProps = dispatch => ({
  submitForm: profile => dispatch(updateProfile(profile)),
  fetchUser: userId => dispatch(fetchCurrentUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)