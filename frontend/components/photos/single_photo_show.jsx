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
    this.props.fetchPhoto(this.props.photoId);
    this.props.getLikes(this.props.getLikes);
  }


  render() {
    const { photo, profile, user, isCurrentProfile, currentProfile, newLike, deleteLike, isLiked, likes } = this.props;
    debugger
    return (
      <div className="photo-show-container">
        <ImageViewer photo={photo} />
        <PhotoProfileDetails photo={photo} profile={profile}
          user={user} isCurrentProfile={isCurrentProfile}
          currentProfile={currentProfile} newLike={newLike} deleteLike={deleteLike} isLiked={isLiked} likes={likes}
        />
      </div>
    )
  }
}