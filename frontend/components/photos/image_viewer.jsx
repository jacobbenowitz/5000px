import React from "react";
import SinglePhotoLoader from "./content-loaders/single-photo-loader";

const ImageViewer = ({ fullScreen, photo, history, toggleFullScreen }) => {
  let imageTopIcons = (
    <div className="image-top-icons">
      <div className="back icon-wrapper"
        onClick={() => history.goBack()}
      >
        <i className="fa-solid fa-arrow-left-long fa-xl back-arrow"></i>
      </div>
      <div className="full-screen icon-wrapper"
        onClick={toggleFullScreen}
      >
        <i className="fa-solid fa-up-right-and-down-left-from-center fa-xl">
        </i>
      </div>
    </div>
  )
  // todo: imageNavIcons (need array of imageIds)
  // let imageNavIcons = (
  //   <div className="image-nav-icons">
  //     <i className="fa-solid fa-angle-left fa-xl"></i>
  //     <i className="fa-solid fa-angle-right fa-xl"></i>
  //   </div>
  // )
  
  return (
    <>
      <div className={fullScreen ? "full-screen-image-container" : 'hide'}>
        {imageTopIcons}
        <div
          className={fullScreen ? "image-container full" : "image-container"}
        >
          {photo.photoUrl ? (
            <img src={photo.photoUrl}
              className={fullScreen ? "photo-large full" : "photo-large"}
              alt={photo.title} 
            />
          ) : (
            <SinglePhotoLoader className="photo-large" />
          )}
        </div>
      </div>

      <div className="lg-single-image-container">
        {imageTopIcons}
        <div className="image-container">
          {photo.photoUrl ? (
            <img src={photo.photoUrl} className="photo-large" alt={photo.title} />
          ) : (
            <SinglePhotoLoader className="photo-large" />
            )}
        </div>
      </div>
    </>
  )
}

export default ImageViewer;