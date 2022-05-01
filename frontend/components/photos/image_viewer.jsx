import React from "react";
const ImageViewer = props => (
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
      <img src={props.photo.photoUrl}
        className="photo-large"
        alt={props.photo.title}></img>
    </div>
  </div>
)

export default ImageViewer;