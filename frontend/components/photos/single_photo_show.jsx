import React from "react";
import ImageViewer from "./image_viewer";
import PhotoProfileDetails from "./photo_profile_details";
import SinglePhotoLoader from "./content-loaders/single-photo-loader";

export default class SinglePhotoShow extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  componentDidMount() {
    debugger
    this.props.photo && this.props.photoProfile &&
      this.props.likes ? this.render() :
      this.props.fetchPhoto(this.props.photoId)
      this.props.getLikes(this.props.getLikes)
  }


  render() {
    const { photo, photoProfile, user, isCurrentProfile, currentProfile, newLike, deleteLike, isLiked, likes, photoId, getLikes } = this.props;
    debugger
    return (
      <div className="photo-show-container">
        {photo ? (
          <>
            <ImageViewer photo={photo} />
            <PhotoProfileDetails photo={photo} photoId={photoId} photoProfile={photoProfile} getLikes={getLikes}
              user={user} isCurrentProfile={isCurrentProfile}
              currentProfile={currentProfile} newLike={newLike}
              deleteLike={deleteLike} isLiked={isLiked} likes={likes}
            />
          </>
        ) : ( <SinglePhotoLoader className="profile-loader" /> )}
      </div>
    )
  }
}