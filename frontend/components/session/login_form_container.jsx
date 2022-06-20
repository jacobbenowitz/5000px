import { connect } from "react-redux";
import { clearErrors, login } from "../../actions/session/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = ({ errors, entities, session }) => ({
  errors: errors.session,
  currentUser:  entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  loginGuest: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);