import { connect } from "react-redux"
import { fetchProfilePhoto } from "../../actions/photos/profile_photos_actions"
import ProfileAvatar from "./profile_avatar"

const mapStateToProps = state => {
  const profileId = state.session.profile
  return {
    profileId: profileId,
    avatar: state.entities.profiles[profileId].profile_avatar
  }
}
const mapDispatchToProps = dispatch => ({
  fetchProfilePhoto: profileId => dispatch(fetchProfilePhoto(profileId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAvatar)