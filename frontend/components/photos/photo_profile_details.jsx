import React from "react";
import PhotoActions from "./photo_actions";

const PhotoProfileDetails = ({ profile, photo }) => (
  <div className="photo-detail-summary">
    <div className="inset-box">
      <PhotoActions />
      <div className="profile-info">
        <div className="avatar-container">
        {/* <img className="user-avatar-lg" src={user.avatar}></img> */}
          <img className="user-avatar-lg" src={profile.profile_avatar}></img>
        </div>
        <div className="user-details">
          <h5 className="photo-show-title">{photo.title}</h5>
          <span className="photo-user-name">by
            {" " + profile.first_name + " " + profile.last_name} </span>
          <span> • </span>
          <a src={'#'} className="follow-link">Follow</a>
        </div>
      </div>

      <div className="photo-details">
        {/* location */}
        <span>
          <strong>Uploaded:</strong>
          about {photo.created_at} hours ago
        </span>
      </div>
    </div>
    {/* TODO use user avatar component */}
    {/* removing profile_avatar, needs to be replaced w/user */}

  </div>
)
    
export default PhotoProfileDetails;