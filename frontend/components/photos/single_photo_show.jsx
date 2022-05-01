import React from "react";
import ImageViewer from "./image_viewer";
import PhotoActions from "./photo_actions";
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
    return (
      <>
        {this.props.photo && this.props.profile &&
          <div className="profile-detail-container">
            <ImageViewer photo={photo} />
            <PhotoActions />
            <PhotoProfileDetails photo={photo} profile={profile} />
          </div>
        }
      </>
    )
    
    // return (
    //   this.props.photo ? (
    //     <div className="profile-detail-container">
    //       <ImageViewer photo={photo} />
    //       <PhotoActions />
    //       <PhotoProfileDetails photo={photo} profile={profile} />
    //     </div>
    //       ) : <h3>Loading</h3>
    // )
        
  }
}