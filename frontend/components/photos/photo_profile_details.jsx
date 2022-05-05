import React from "react";
import PhotoActions from "./photo_actions";
import {timeSinceUplaod} from "../../util/todays_date_util"
import ProfileDetailsLoader from "./content-loaders/profile-details-loader";
import likeIconContainer from "../action_components/like_icon_container";

export default class PhotoProfileDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { photo, profile, user, isCurrentProfile, currentProfile, newLike, deleteLike, isLiked, likes } = this.props;

    return (
      <div className="photo-detail-summary">
        <div className="inset-box">
          {Object.keys(photo).length > 0 && Object.keys(profile).length > 0 && Object.keys(user).length > 0 ? (
            <>
              <PhotoActions isCurrentProfile={isCurrentProfile} photo={photo}
                photoId={photo.id}
                profile={profile} isCurrentProfile={isCurrentProfile}
                currentProfile={currentProfile} newLike={newLike} deleteLike={deleteLike} isLiked={isLiked} likes={likes}
              />
              <div className="profile-info">
                <div className="avatar-container">
                  {/* <img className="user-avatar-lg" src={user.avatar}></img> */}
                  <img className="user-avatar-lg" src={profile.avatar}></img>
                </div>
                <div className="user-details">
                  <h5 className="photo-show-title">{photo.title}</h5>
                  {profile.first_name.length === 0 ? (
                    <span className="photo-user-name">by
                      {user.username} </span>
                  ) : (
                    <span className="photo-user-name">by
                      {" " + profile.first_name + " " + profile.last_name} </span>
                  )}
                  <span> • </span>
                  <a src={'#'} className="follow-link">Follow</a>
                </div>
              </div>

              <div className="photo-details">
                <div className="detail-box">
                  <span className="photo-location"> {photo.location} </span>
                  <span className="photo-date">
                    <strong>Uploaded: </strong> about {timeSinceUplaod(photo.created_at)}
                  </span>
                </div>
                <div className="detail-box">
                  <p className="photo-description">{photo.description}</p>
                </div>
              </div>
              
            </>) : (
            <ProfileDetailsLoader />
          )
          }
          {/* TODO use user avatar component */}
          {/* removing profile_avatar, needs to be replaced w/user */}
        </div>
      </div>
    )
  }
}