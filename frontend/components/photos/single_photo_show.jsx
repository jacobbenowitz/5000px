import React from "react";
import ImageViewer from "./image_viewer";
import PhotoProfileDetails from "./photo_profile_details";
import SinglePhotoLoader from "./content-loaders/single-photo-loader";

export default class SinglePhotoShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { photoId, photo, photoProfile, likes,
      isLiked, user, isCurrentProfile, currentProfile,
      fetchProfile, fetchPhoto, getLikes } = this.props;
    
    window.scrollTo(0, 0)
    
    fetchPhoto(photoId)
    getLikes(getLikes)
  }

  componentDidUpdate() {
    const { photoProfile, photo, fetchProfile } = this.props; 
    if (photo && !photoProfile) {
      fetchProfile(photo?.profile_id)
    }
  }


  render() {
    const { photo, photoProfile, user, isCurrentProfile, currentProfile, newLike, deleteLike, isLiked, likes, photoId, getLikes } = this.props;
    return (
      <div className="photo-show-container">
        {photo ? (
          <>
            <ImageViewer
              photo={photo}
              history={this.props.history}
            />
            <PhotoProfileDetails
              photo={photo}
              photoId={photoId}
              photoProfile={photoProfile}
              user={user}
              isCurrentProfile={isCurrentProfile}
              currentProfile={currentProfile}
              getLikes={getLikes}
              newLike={newLike}
              deleteLike={deleteLike}
              isLiked={isLiked}
              likes={likes}
            />
          </>
        ) : ( <SinglePhotoLoader className="profile-loader" /> )}
      </div>
    )
  }
}