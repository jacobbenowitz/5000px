import { connect } from "react-redux"
import { fetchProfile } from "../../../actions/profile/profile_actions";
import ProfileShow from "./profile_show";

const mapStateToProps = (state, { match }) => {

  const userId = match.params.userId;
  const user = state.entities.users[userId];
  const profileId = user.profileId;
  const profile = state.entities.profiles[profileId];

  return {
    user: user,
    profile: profile
  }
}

const mapDispatchToProps = dispatch => {
  fetchProfile: profileId => dispatch(fetchProfile(profileId))
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);