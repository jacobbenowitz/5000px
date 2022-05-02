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
    this.props.fetchPhoto(this.props.photoId)
  }


  render() {
    const { photo, profile, user, currentUser } = this.props;
    debugger
    return (
      <div className="photo-show-container">
        { this.props.photo ? ( <ImageViewer photo={photo} />
        ) : ( <SinglePhotoLoader style={{ width: '100%' }} />  ) }
        { this.props.profile ? ( 
        <PhotoProfileDetails photo={photo} profile={profile} />
          ) : (<h2>loading...</h2>)}
      </div>
    )

  }
}