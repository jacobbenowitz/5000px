import { connect } from "react-redux";
import { createProfile } from "../../actions/profile/profile_actions";
import { fetchCurrentUser } from "../../actions/session/session_actions";
import NewProfileForm from "./new_profile_form";
import {getTodaysDate} from "../../util/todays_date_util";

const mapStateToProps = (state, ownProps) => {
  const userId = state.session.id;
  const errors = state.errors.profiles;
  
  // review nested profile
  const profile = {
    profile: {
      first_name: '',
      last_name: '',
      profile_avatar: '',
      profile_banner: '',
      website_url: '',
      instagram_url: '',
      lenses: '',
      cameras: '',
      // birthday: getTodaysDate(),
      city: '',
      country: '',
      about: '',
      gender: 'Not specified',
      user_id: userId
    },
    errors: errors
  };

  // debugger

  return profile;
}

const mapDispatchToProps = dispatch => ({
  submitForm: profile => dispatch(createProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProfileForm)