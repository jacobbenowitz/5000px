import React from "react";
import ImageViewer from "./image_viewer";
import PhotoProfileDetails from "./photo_profile_details";
import SinglePhotoLoader from "./content-loaders/single-photo-loader";

const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'
export default class SinglePhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: IDLE
    }
  }

  componentDidMount() {
    const { photo, profile, photoId, fetchPhoto, fetchProfile, getLikes } = this.props;
    window.scrollTo(0, 0)
    getLikes()
    if (photo && profile) {
      this.setState({status: DONE})
    } else if (photo && !profile) {
      this.setState({BUSY})
      fetchProfile(photo.profile_id)
    } else {
      fetchPhoto(photoId)
    }
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


  render() {
    const { photo, profile, user, isCurrentProfile, currentProfile, createLike, removeLike, likes, photoId, getLikes, allLikes } = this.props;
    const { status } = this.state;
    
    return (
      <div className="photo-show-container">
        {status === DONE ? (
          <>
            <ImageViewer
              photo={photo}
              history={this.props.history}
            />
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
            />
          </>
        ) : ( <SinglePhotoLoader className="profile-loader" /> )}
      </div>
    )
  }
}