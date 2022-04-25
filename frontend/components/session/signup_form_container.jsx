import { connect } from "react-redux";
import { signup } from "../../actions/session/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  emptyProfile: {
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
      user_id: ''
    }
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user))

});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);