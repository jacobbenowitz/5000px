import React from "react";
import { Link } from "react-router-dom";

export const ProfileDetails = ({ profile, user, isCurrentProfile }) => {
  
  let location, name, profileStats, profileLinks, websiteLink, instagramLink;

  profileStats = (
    <div className="profile-stats-wrapper flex-row">
      <div className="profile-stats-section flex-row following">
        <span className="stats-reg">0</span>
        <span className="stats-bold">Following</span>
      </div>
      <div className="profile-stats-section flex-row followers">
        <span className="stats-reg">0</span>
        <span className="stats-bold">Followers</span>
      </div>
      <div className="profile-stats-section flex-row likes">
        <span className="stats-reg">0</span>
        <span className="stats-bold">Photo likes</span>
      </div>
    </div>
  )

  if (profile.website_url) {
    websiteLink = (
      <Link
        to={profile.website_url}
        className="social-icon-link"
      >
        <i className="fa-solid fa-globe fa-xl" />
      </Link>
    )
  }
  if (profile.instagram_url) {
    instagramLink = (
      <Link
        to={`https://www.instagram.com/${profile.instagram_url}`}
        className="social-icon-link"
      >
        <i className="fa-brands fa-instagram fa-xl" />
      </Link>
    )
  }

  profileLinks = (
    <div className="social-links flex-row ">
      {websiteLink}
      {instagramLink}
    </div>
  )

  if (profile.city.length || profile.country.length) {
    location = (
      <div className="flex-row gap-10">
        <i className="fa-solid fa-map-pin fa-sm" />
        <span className="profile-location">
          <p className="profile-city">
            {profile.city + ", " + profile.country}</p>
        </span>
      </div>
    )
  }

  if (profile.first_name) {
    name = (
      <h3 className="profile-name">
        {profile.first_name + " " + profile.last_name}
      </h3>
    )
  } else {
    name = (
      <h3 className="profile-name">
        {user.username}
      </h3>
    )
  }
  
  return (
    <div className="profile-wrapper">

      <div className="profile-action-icons">

        <div className="icon-box">
          <a href={'#'} className="icon-link share">
            <i className="fa-solid fa-share-nodes fa-xl"></i>
          </a>
        </div>

        {/* EDIT */}
        {isCurrentProfile ? (
          <div className="icon-box">
            <Link to={`/profiles/settings`}
              className="icon-link edit">
              <i className="fa-regular fa-pen-to-square fa-xl"></i>
            </Link>
          </div> ) : ( null )}
      </div>
      
      <div className="profile-header-container">
        {name}
        {location}
        {/* follow button  */}
        <button
          className="follow-button"
        >
          Follow
        </button>
      </div>

      <div className="profile-bio-and-stats-container">
        <p className="profile-about">
          {profile.about}
        </p>
        {profileStats}
        {profileLinks}
      </div>

    </div>
  )
}