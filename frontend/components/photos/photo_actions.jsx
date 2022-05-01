import React from "react";

const PhotoActions = props => (
  <div className="photo-action-icons">
    {/* LIKE */}
    <div className="icon-box">
      <a href={'#'} className="photo-icon-link like">
        <i className="fa-regular fa-heart fa-xl"></i>
      </a>

    </div>
    <div className="icon-box">
      <a href={'#'} className="photo-icon-link share">
        <i className="fa-solid fa-share-nodes fa-xl"></i>
      </a>
    </div>
    {/* SHARE */}
  </div>
)

export default PhotoActions;