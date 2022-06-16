import React from "react";
import { Link } from "react-router-dom";
import LikeIcon from "../action_components/like_icon";

const PhotoActions = ({ photo, photoId, isCurrentProfile, currentProfile, createLike, removeLike, likes, allLikes }) => {
  return (
    <div className="photo-action-icons">
      <div className="icon-box like-box">
        <LikeIcon
          photo={photo}
          photoId={photoId}
          currentProfile={currentProfile}
          isCurrentProfile={isCurrentProfile}
          createLike={createLike}
          removeLike={removeLike}
          likes={likes} 
          allLikes={allLikes}
        />

      </div>
      {/* SHARE */}
      {/* <div className="icon-box">
        <a href={'#'} className="icon-link share">
          <i className="fa-solid fa-share-nodes fa-xl"></i>
        </a>
      </div> */}
      {/* EDIT */}
      {isCurrentProfile ? (
        <div className="icon-box">
          <Link to={`/photos/${photo.id}/edit`}
            className="icon-link edit">
            <i className="fa-regular fa-pen-to-square fa-xl"></i>
          </Link>
        </div> ) : ( null )}
    </div>
  )
}

export default PhotoActions;