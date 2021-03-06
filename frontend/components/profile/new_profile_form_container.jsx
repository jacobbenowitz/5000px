import { connect } from "react-redux";
import { createProfile } from "../../actions/profile/profile_actions";
import NewProfileForm from "./new_profile_form";

const mapStateToProps = (state, ownProps) => {
  const userId = state.session.id;
  const errors = state.errors.profiles;

  return {
    errors: errors,
    userId: userId,
    history: ownProps.history
  };
}

const mapDispatchToProps = dispatch => ({
  submitForm: profile => dispatch(createProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProfileForm)