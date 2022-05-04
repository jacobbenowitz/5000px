
import PhotoAlbum from "react-photo-album";
import SinglePhotoLoader from "../../photos/content-loaders/single-photo-loader";
import React from "react";
import { render } from "react-dom";
import { buildGalleryArray } from "../../../reducers/selectors";
import { Link } from "react-router-dom";

const showOverlay = (id) => {
  const overlay = document.getElementById(`gal-img-${id}`);
  overlay.classList.add('overlay-show');
  overlay.classList.remove('overlay-hidden');
}

const hideOverlay = (id) =>{
  const overlay = document.getElementById(`gal-img-${id}`);
  overlay.classList.add('overlay-hidden');
  overlay.classList.remove('overlay-show');
}
/////////// need to add profile or username to imageProps via gallery selector

const renderPhoto = ({ layout, layoutOptions, imageProps: { alt, style, id, link, src } }) => (
  <div id={`gal-img-${id}`}
      style={{
        boxSizing: "content-box",
        alignItems: "flex-end",
        width: style.width,
        height: "64px",
        background: "linear-gradient(hsla(0,0%,76.9%,0) 87.49%, 179.99deg,rgba(0,0,0,.47) .02%)"
      }}
    >
    <Link to={link}>
      <img alt={alt}
        src={src}
        style={{ ...style, width: "100%", padding: 0 }}
        onMouseEnter={() => showOverlay(id)} onMouseLeave={() => hideOverlay(id)}
      />
  </Link>
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

// const renderPhotos = [
//   {
//     src: "https://my5000px-static.s3.amazonaws.com/800px/brooklyn-bridge.jpg",
//     width: 796,
//     height: 430,
//   },
//   {
//     src: "https://my5000px-static.s3.amazonaws.com/800px/jazz-performer-plays-the-saxophone.jpg",
//     width: 545,
//     height: 531,
//   },
//   {
//     src: "https://my5000px-static.s3.amazonaws.com/800px/los-angeles-vibes.jpg",
//     width: 573,
//     height: 531,
//   },
//   {
//     src: "https://my5000px-static.s3.amazonaws.com/800px/lost-in-the-city.jpg",
//     width: 708,
//     height: 529,
//   }
// ]

// working example

// const ProfileRows = () => {
//   return <div id="profile-gallery-box">
//     <PhotoAlbum layout="rows"
//       maxPhotos={4}
//       photos={renderPhotos}
//       targetRowHeight={377}
//     />
//   </div>
// }

export default ProfileRows;