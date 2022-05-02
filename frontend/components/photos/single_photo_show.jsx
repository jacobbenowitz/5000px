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
      <>
        {this.props.photo && this.props.profile ? (
          <div className="photo-show-container">
            <ImageViewer photo={photo} />
            <PhotoProfileDetails photo={photo} profile={profile} />
          </div>
        ) : (
            <h1>Loading...</h1>
        )
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