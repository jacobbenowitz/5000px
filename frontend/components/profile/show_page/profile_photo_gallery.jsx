import PhotoAlbum from "react-photo-album";
import SinglePhotoLoader from "../../photos/content-loaders/single-photo-loader";
import React from "react";
import { render } from "react-dom";
import { buildGalleryArray } from "../../../reducers/selectors";
import { Link } from "react-router-dom";



const renderPhoto = ({ id, layout, layoutOptions, imageProps: { link, alt, style, ...restImageProps } }) => (
  <div 
    style={{
      border: "2px solid #eee",
      borderRadius: "4px",
      boxSizing: "content-box",
      alignItems: "center",
      width: style?.width,
      height: style?.height,
      padding: `${layoutOptions.padding - 2}px`,
      paddingBottom: 0,
    }}
    
  >
    <img key={id} alt={alt} style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} />
  </div>
);

const ProfileRows = photos => {
  let galleryPhotos = buildGalleryArray(photos);
  debugger
  return <div id="profile-gallery-box">
    <PhotoAlbum photos={galleryPhotos}
      layout="rows"
      maxPhotos={4}
      targetRowHeight={377}
      renderPhoto={renderPhoto}
    />
  </div>
}

export default ProfileRows;