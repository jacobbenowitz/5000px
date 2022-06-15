import React from "react";
import ImageViewer from "./image_viewer";
import PhotoProfileDetails from "./photo_profile_details";
import SinglePhotoLoader from "./content-loaders/single-photo-loader";
import PhotoComments from "./photo_comments";
import FollowButton from "../action_components/follow_button";


const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'
export default class SinglePhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: IDLE,
      fullScreen: false
    }
    this.toggleFullScreen = this.toggleFullScreen.bind(this)
  }

  componentDidMount() {
    const { photo, profile, photoId, fetchPhoto,
      fetchProfile, getLikes, getFollows, getComments } = this.props;
    
    window.scrollTo(0, 0)
    getLikes()
    getFollows()
    getComments()
    
    if (photo && profile) {
      this.setState({status: DONE})
    } else if (photo && !profile) {
      this.setState({BUSY})
      fetchProfile(photo.profile_id)
    } else fetchPhoto(photoId)
  }

  componentWillUnmount() {
    this.setState({status: IDLE})
  }

  componentDidUpdate() {
    const { profile, photo, fetchProfile } = this.props; 
    const { status } = this.state;

    if (status === IDLE && photo) {
      this.setState({status: BUSY})
      fetchProfile(photo.profile_id)
    }
    if (photo && profile && status !== DONE) {
      this.setState({status: DONE})
    }
  }

  toggleFullScreen(e) {
    e.preventDefault()
    this.setState({ fullScreen: !this.state.fullScreen })
  }

  render() {
    const { photo, profile, user, isCurrentProfile, currentProfile, createLike, removeLike, likes, photoId, getLikes, allLikes, createFollow, removeFollow, getFollows, allFollows, createComment, deleteComment, history } = this.props;
    const { status, fullScreen } = this.state;
    let photoDetailsBottom;

    if (fullScreen) {
      photoDetailsBottom = null
    } else {
      photoDetailsBottom = (
        <div className="photo-bottom-wrapper">
          <PhotoProfileDetails
            photo={photo}
            photoId={photoId}
            photoProfile={profile}
            user={user}
            isCurrentProfile={isCurrentProfile}
            currentProfile={currentProfile}
            getLikes={getLikes}
            createLike={createLike}
            removeLike={removeLike}
            likes={likes}
            allLikes={allLikes}
            allFollows={allFollows}
            createFollow={createFollow}
            removeFollow={removeFollow}
          />
          <PhotoComments
            currentProfile={currentProfile}
            photo={photo}
            createComment={createComment}
            deleteComment={deleteComment}
          />
        </div>
      )
    }

    return (
      <div className="photo-show-container">
        {status === DONE ? (
          <>
            <ImageViewer
              photo={photo}
              history={history}
              fullScreen={fullScreen}
              toggleFullScreen={this.toggleFullScreen}
            />
            {photoDetailsBottom}
          </>
        ) : ( <SinglePhotoLoader className="profile-loader" /> )}
      </div>
    )
  }
}