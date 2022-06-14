import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photos/photos_actions";
import SinglePhotoShow from "./single_photo_show";
import { fetchUser } from "../../actions/session/session_actions";
import { fetchProfile } from "../../actions/profile/profile_actions";
import { getLikes, createLike, removeLike } from '../../actions/likes/like_actions';
import { getFollows, createFollow, removeFollow } from "../../actions/follows/follows_actions";


const mapStateToProps = ({entities, session}, { match }) => {
  const photoId = match.params.photoId;
  const photo = entities.photos.all[photoId];
  const profile = entities.profiles.all[photo?.profile_id];
  const user = entities.users[photo?.userId];
  const isCurrentProfile = photo?.profile_id == session.profile.id;
  const currentProfile = session.profile;
  

  return {
    photo: photo,
    profile: profile,
    allProfiles: entities.profiles.all,
    photoId: photoId,
    likes: photo?.likes,
    allLikes: entities.likes,
    user: user,
    isCurrentProfile: isCurrentProfile,
    currentProfile: currentProfile,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchProfile: profileId => dispatch(fetchProfile(profileId)),
    getLikes: () => dispatch(getLikes()),
    createLike: like => dispatch(createLike(like)),
    removeLike: likeId => dispatch(removeLike(likeId)),
    createFollow: follow => dispatch(createFollow(follow)),
    removeFollow: follow => dispatch(removeFollow(follow)),
    getFollows: () => dispatch(getFollows())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePhotoShow);