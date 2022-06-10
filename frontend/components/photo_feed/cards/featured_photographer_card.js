import React from "react";
import { Link } from "react-router-dom";
import FeaturedCardRows from "../featured_card_gallery";

/**
 * @param  {array} photos
 * @param  {object} profile
 * @param  {} => return (<divclassName="featured-photo-card-wrapper"><divclassName={type}></div></div>
 */

const FeaturedPhotographerCard = ({ photos, profile }) => {

  const styleBg = (src) => {
    return {backgroundImage: `url(${src})`}
  }

  return (
    <div className="featured-photo-card-wrapper">
      {/* <FeaturedCardRows
        photos={photos}
      /> */}
      <div className="ft-card-grid">
        <div className="ft-card-photo" 
          style={styleBg(photos[0].thumbnailUrl)}
        />
        <div className="ft-card-photo " 
          style={styleBg(photos[1].thumbnailUrl)}
        />
        <div className="ft-card-photo" 
          style={styleBg(photos[2].thumbnailUrl)}
        />
      </div>
      <div className="ft-card-bottom">
        <div className="ft-card-profile">
          {/* <AvatarSm /> */}
          <div className="ft-text">
            <Link className="ft-name"
              to={`/profiles/${profile.id}`}
            >
              {profile.name}
            </Link>
            <span className="ft-location">
              {profile.location}
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

