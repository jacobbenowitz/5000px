import React from "react";
import CoverPhotoLoader from "../content_loaders/cover_photo_loader";

export const CoverPhoto = ({ profile, isCurrentProfile }) => {
  let cover
  if (profile && profile.cover.length > 0) {
    cover = <img src={profile.cover} />
  } else if (profile && !profile.cover) {
    cover = <img src={"https://my5000px-static.s3.amazonaws.com/placeholder-image.png"} /> 
  } else {
    cover = (
      <CoverPhotoLoader />
    )
  }
  return (
    <div className="profile-cover-container">
      {cover}
    </div>
  )
}