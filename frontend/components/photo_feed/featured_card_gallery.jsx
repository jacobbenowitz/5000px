import PhotoAlbum from "react-photo-album";
import SinglePhotoLoader from "../photos/content-loaders/single-photo-loader";
import React from "react";
import { render } from "react-dom";
import { buildFeaturedGalleryArray } from "../../reducers/selectors";
import { Link } from "react-router-dom";


// for discover gallery, username shown on hover
const renderPhoto = ({ layoutOptions, imageProps: { title, alt, style, id, key, ...restImageProps } }) => {
  return (
    <img key={key} alt={alt}
      // style={{ height: "128px", padding: 0 }}
      {...restImageProps} 
      />
  )
};

const renderContainer = ({ containerProps, containerRef, children }) => (
  <div ref={containerRef}{...containerProps}
    style={{height: '128px', width: '387px' }}
  >
    {children}
  </div>
);

//     justify-content: space-between;
// height: 100 %;
// align - items: center;

const renderRowContainer = ({ rowContainerProps, children }) => (
  <div {...rowContainerProps}
    style={{
      justifyContent: 'space-between',
      height: '100%',
      alignItems: 'center'
    }}
  >
    {children}
  </div>
);

const FeaturedCardRows = ({photos}) => {
  let galleryPhotos = buildFeaturedGalleryArray(photos);
  return <div className="featured-card-gallery">
    <PhotoAlbum
      photos={galleryPhotos}
      layout="rows"
      maxPhotos={3}
      defaultContainerWidth={387}
      targetRowHeight={128}
      renderContainer={renderContainer}
      // renderRowContainer={renderRowContainer}
    />
  </div>
}

export default FeaturedCardRows;