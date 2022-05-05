import React from "react";
import { Link } from "react-router-dom";
import LikeIconContainer from "../action_components/like_icon_container";

const PhotoActions = props => (
  <div className="photo-action-icons">
    {/* LIKE */}
    <div className="icon-box">
      <LikeIconContainer
        currentProfile={this.props.currentProfile}
        photoId={this.props.photo.id}
      />
      {/* <a href={'#'} className="icon-link like">
        <i className="fa-regular fa-heart fa-xl"></i>
      </a> */}

    </div>
    {/* SHARE */}
    <div className="icon-box">
      <a href={'#'} className="icon-link share">
        <i className="fa-solid fa-share-nodes fa-xl"></i>
      </a>
    </div>
    {/* EDIT */}
    {props.isCurrentProfile ? (
      <div className="icon-box">
        <Link to={`/photos/${props.photo.id}/edit`}
          className="icon-link edit">
          <i className="fa-regular fa-pen-to-square fa-xl"></i>
        </Link>
      </div> ) : ( null )}
  </div>
)

export default PhotoActions;