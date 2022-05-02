import React from "react";
import ImageViewer from "./image_viewer";
import PhotoProfileDetails from "./photo_profile_details";


export default class SinglePhotoShow extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  componentDidMount() {
    debugger
    this.props.fetchPhoto(this.props.photoId)
  }


  render() {
    const { photo, profile, user, currentUser } = this.props;
    debugger
    return (
      <div className="photo-show-container">
        <ImageViewer photo={photo} />
        <PhotoProfileDetails photo={photo} profile={profile}
          user={user} currentUser={currentUser}
        />
      </div>
    )
  }
}