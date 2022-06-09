import React from "react";
import { Link } from "react-router-dom";

/**
 * @param  {array} photos
 * @param  {object} profile
 * @param  {} => return (<divclassName="featured-photo-card-wrapper"><divclassName={type}></div></div>
 */

const FeaturedPhotographerCard = ({ photos, profile }) => {
  return (
    <div className="featured-photo-card-wrapper">
      
      <div className='ft-card-top'>
        <div className="ft-photo-wrapper"></div>
        <div className="ft-photo-wrapper"></div>
        <div className="ft-photo-wrapper"></div>
      </div>
      <div className="ft-card-bottom">
        <div className="ft-card-profile">
          {/* <AvatarSm /> */}
          <div className="ft-text">
            <Link className="ft-name"
              to={`/`}
              // to={`/profiles/${profile.id}`}
            >
              John Potato
            </Link>
            <span className="ft-location">
              New York, New York
            </span>
          </div>
        </div>
        <div className="ft-card-follow">
          <button className="follow-button">
            Follow
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPhotographerCard

