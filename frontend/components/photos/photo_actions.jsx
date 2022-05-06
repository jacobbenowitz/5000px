import React from "react";
import { Link } from "react-router-dom";
import LikeIcon from "../action_components/like_icon";

export default class PhotoActions extends React.Component {
  constructor(props) {
    super(props)
    debugger
  }

  render() {
    const { photo, photoId, user, isCurrentProfile, currentProfile, newLike, deleteLike, isLiked, likes, getLikes } = this.props;
    return (
      <div className="photo-action-icons">
        {/* LIKE */}
        <div className="icon-box like-box">
          <LikeIcon isCurrentProfile={isCurrentProfile} photo={photo}
            photoId={photoId} currentProfile={currentProfile}
            isCurrentProfile={isCurrentProfile} currentProfile={currentProfile} newLike={newLike} deleteLike={deleteLike} isLiked={isLiked}
            likes={likes} getLikes={getLikes} className="icon-link like"/>

        </div>
        {/* SHARE */}
        <div className="icon-box">
          <a href={'#'} className="icon-link share">
            <i className="fa-solid fa-share-nodes fa-xl"></i>
          </a>
        </div>
        {/* EDIT */}
        {currentProfile ? (
          <div className="icon-box">
            <Link to={`/photos/${photo.id}/edit`}
              className="icon-link edit">
              <i className="fa-regular fa-pen-to-square fa-xl"></i>
            </Link>
          </div> ) : ( null )}
      </div>
    )
  }
}