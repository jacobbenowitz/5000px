import { connect } from "react-redux"
import ProfileForm from "./profile_form"

const mapStateToProps = state => {
  const user = state.entities.users[state.session.id];
  return {
    currentUser: user
  }
}

const mapDispatchToProps = dispatch => ({
  updateProfile: () => dispatch(updateProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)