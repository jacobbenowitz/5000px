import { connect } from "react-redux";
import { createProfile } from "../../actions/profile/profile_actions";
import { fetchCurrentUser } from "../../actions/session/session_actions";
import NewProfileForm from "./new_profile_form";
import {getTodaysDate} from "../../util/todays_date_util";

const mapStateToProps = (state, ownProps) => {
  const userId = state.session.id;
  const errors = state.errors.profiles;

  // debugger

  return {
    errors: errors,
    userId: userId
  };
}

const mapDispatchToProps = dispatch => ({
  submitForm: profile => dispatch(createProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProfileForm)