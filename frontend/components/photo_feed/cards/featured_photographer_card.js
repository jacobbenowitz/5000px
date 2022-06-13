import React from "react";
import { Link } from "react-router-dom";
import FeaturedCardRows from "../featured_card_gallery";

/**
 * @param  {array} photos
 * @param  {object} profile
 * @param  {} => return (<divclassName="featured-photo-card-wrapper"><divclassName={type}></div></div>
 */

const FeaturedPhotographerCard = ({ allPhotos, featuredPhotographer }) => {

  const styleBg = (src) => {
    return {backgroundImage: `url(${src})`}
  }
  let featuredIds = featuredPhotographer.photoIds
  return (
    <div className="featured-photo-card-wrapper">
      <div className="ft-card-grid">
        <div className="ft-card-photo" 
          style={styleBg(allPhotos[featuredIds[0]].thumbnailUrl)}
        />
        <div className="ft-card-photo " 
          style={styleBg(allPhotos[featuredIds[1]].thumbnailUrl)}
        />
        <div className="ft-card-photo" 
          style={styleBg(allPhotos[featuredIds[2]].thumbnailUrl)}
        />
      </div>
      <div className="ft-card-bottom">
        <div className="ft-card-profile">
          {/* <AvatarSm /> */}
          <div className="ft-text">
            <Link className="ft-name"
              to={`/profiles/${featuredPhotographer.profile.id}`}
            >
              {featuredPhotographer.profile.name}
            </Link>
            <span className="ft-location">
              {featuredPhotographer.profile.location}
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

