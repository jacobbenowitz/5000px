import React from "react";
import SinglePhotoLoader from "./content-loaders/single-photo-loader";

export default class ImageViewer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="lg-single-image-container">
        <div className="image-top-icons">
          <a href={"#"}>
            <i className="fa-solid fa-up-right-and-down-left-from-center fa-xl full-screen">
            </i>
          </a>
          <a href={"#"}>
            <i className="fa-solid fa-arrow-left-long fa-xl back-arrow"></i>
          </a>
        </div>

        <div className="image-nav-icons">
          <i className="fa-solid fa-angle-left fa-xl"></i>
          <i className="fa-solid fa-angle-right fa-xl"></i>
        </div>
        <div className="image-container">
          {this.props.photo.photoUrl ? (
            <img src={this.props.photo.photoUrl} className="photo-large" alt={this.props.photo.title} />
          ) : (
            <SinglePhotoLoader className="photo-large" />
          )}
        </div>
      </div>
    )
  }
}