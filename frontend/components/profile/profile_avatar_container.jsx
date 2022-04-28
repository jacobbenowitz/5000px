import { connect } from "react-redux"
import { fetchProfile } from "../../actions/profile/profile_actions"
import ProfileAvatar from "./profile_avatar"

const mapStateToProps = state => {
  const profileId = state.session.profile
  debugger
  return {
    avatar: state.entities.profiles[profileId].profile_avatar
  }
}
const mapDispatchToProps = dispatch => ({
  fetchProfile: profileId => dispatch(fetchProfile(profileId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAvatar)