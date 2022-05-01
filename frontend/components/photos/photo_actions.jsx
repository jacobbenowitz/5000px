import React from "react";

const PhotoActions = props => (
  <div className="photo-action-icons">
    {/* LIKE */}
    <a href={'#'} className="photo-icon-link like">
      <i className="fa-regular fa-heart"></i>
    </a>
    {/* SHARE */}
    <a href={'#'} className="photo-icon-link share">
      <i className="fa-solid fa-share-nodes"></i>
    </a>
  </div>
)

export default PhotoActions;