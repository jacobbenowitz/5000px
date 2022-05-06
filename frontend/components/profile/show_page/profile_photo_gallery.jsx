import PhotoAlbum from "react-photo-album";
import SinglePhotoLoader from "../../photos/content-loaders/single-photo-loader";
import React from "react";
import { render } from "react-dom";
import { buildGalleryArray } from "../../../reducers/selectors";
import { Link } from "react-router-dom";



const renderPhoto = ({ layoutOptions, imageProps: { key, title, alt, style, ...restImageProps } }) => {

  return <div 
  style={{
    boxSizing: "content-box",
    alignItems: "center",
    width: style?.width,
    height: style?.height,
    }}
    >
    {/* <span>{key}, {title}, {alt} </span> */}
    <img key={key} alt={alt} style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} />
  </div>
};

// const renderContainer = (RenderContainerProps) => (  )


const ProfileRows = (photos) => {
  // debugger
  let galleryPhotos = buildGalleryArray(photos);
  return <div id="profile-gallery-box">
    <PhotoAlbum
      photos={galleryPhotos}
      layout="rows"
      maxPhotos={4}
      targetRowHeight={377}
      renderPhoto={renderPhoto}
    />
  </div>
}

export default ProfileRows;