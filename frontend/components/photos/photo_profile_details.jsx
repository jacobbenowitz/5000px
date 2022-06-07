import React from "react";
import ReactDOM from "react-dom"
import PhotoActions from "./photo_actions";
import {timeSinceUplaod} from "../../util/todays_date_util"
import ProfileDetailsLoader from "./content-loaders/profile-details-loader";
import likeIconContainer from "../action_components/like_icon_container";

export default class PhotoProfileDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { photo, photoId, photoProfile, user, isCurrentProfile, currentProfile, newLike, deleteLike, isLiked, likes, getLikes } = this.props;

    return (
      <div className="photo-detail-summary">
        <div className="inset-box">
          {photo && photoProfile && user ? (
            <>
              <PhotoActions getLikes={getLikes}
                isCurrentProfile={isCurrentProfile} photo={photo}
                photoId={photoId} photoProfile={photoProfile}
                currentProfile={currentProfile} newLike={newLike} deleteLike={deleteLike} isLiked={isLiked} likes={likes}
              />
              <div className="profile-info">
                <div className="avatar-container">
                  {/* <img className="user-avatar-lg" src={user.avatar}></img> */}
                  <img className="user-avatar-lg" src={photoProfile.avatar}></img>
                </div>
                <div className="user-details">
                  <h5 className="photo-show-title">{photo.title}</h5>
                  {photoProfile.first_name ? (
                    <span className="photo-user-name">by
                      {" " + photoProfile.first_name + " " + photoProfile.last_name} </span>
                  ) : (
                    <span className="photo-user-name">by
                      {user.username} </span>
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
              
            </> ) : ( <ProfileDetailsLoader /> )  }
        </div>
      </div>
    )
  }
}