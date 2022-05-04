import Gallery from "react-photo-gallery";
import SinglePhotoLoader from "../../photos/content-loaders/single-photo-loader";
import React from "react";
import { render } from "react-dom";

const renderPhotos = [
  {
    src: "https://my5000px-static.s3.amazonaws.com/800px/brooklyn-bridge.jpg",
    width: 8,
    height: 4,
  },
  {
    src: "https://my5000px-static.s3.amazonaws.com/800px/jazz-performer-plays-the-saxophone.jpg",
    width: 545,
    height: 531,
  },
  {
    src: "https://my5000px-static.s3.amazonaws.com/800px/los-angeles-vibes.jpg",
    width: 573,
    height: 531,
  },
  {
    src: "https://my5000px-static.s3.amazonaws.com/800px/lost-in-the-city.jpg",
    width: 708,
    height: 529,
  }
]
/* popout the browser and maximize to see more rows! -> */
const ProfileRows = photos => {
  // const renderPhotos = photos.length > 0 ? photos : {
  //   [
  //     <SinglePhotoLoader />
  //   ]
  // }

  <Gallery photos={renderPhotos} />;
  render(<ProfileRows />, document.querySelector(".profile-gallery-box"))
};

export default ProfileRows;