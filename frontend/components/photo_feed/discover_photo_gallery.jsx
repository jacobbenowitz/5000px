import PhotoAlbum from "react-photo-album";
import SinglePhotoLoader from "../photos/content-loaders/single-photo-loader";
import React from "react";
import { render } from "react-dom";
import { buildDiscoverGalleryArray } from "../../reducers/selectors";
import { Link } from "react-router-dom";


// for discover gallery, username shown on hover
const renderPhoto = ({ layoutOptions, imageProps: { title, alt, style, id, key, ...restImageProps } }) => {
  return (
    <Link 
      to={title}
      className="image-wrapper"
      onMouseOver={e => {
        e.target.setAttribute('data-before', alt)
      }}
      style={{
        boxSizing: "content-box",
        alignItems: "center",
        width: style?.width,
        height: style?.height,
        }}
    >
      <img key={key} alt={alt}
        style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} />
    </Link>
  )
};

// const renderContainer = (RenderContainerProps) => (  )


const DiscoverRows = (photos) => {
  let galleryPhotos = buildDiscoverGalleryArray(photos);
  return <div id="home-gallery-box">
    <PhotoAlbum
      photos={galleryPhotos}
      layout="rows"
      maxPhotos={4}
      targetRowHeight={377}
      renderPhoto={renderPhoto}
    />
  </div>
}

export default DiscoverRows;