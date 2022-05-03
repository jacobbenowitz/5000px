import React from "react";
import CoverPhotoLoader from "../content_loaders/cover_photo_loader";

export const CoverPhoto = ({ profile, isCurrentProfile }) => {

  return (
    <div className="profile-cover-container">
      { profile.cover ? (
        <img src={profile.cover} />
      ): (
        <CoverPhotoLoader />
      )}
    </div>
  )
}