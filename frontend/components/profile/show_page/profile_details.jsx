import React from "react";
import { Link } from "react-router-dom";

export const ProfileDetails = ({profile, user, isCurrentProfile}) => {
  
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
        {/* name */}
        {profile.first_name.length === 0 ? (
        <h3 className="profile-name">
          {user.username} </h3> ) : (
        <h3 className="profile-name">
          {profile.first_name + " " + profile.last_name}
          </h3>)} 
        
        {/* location */}
        <span className="profile-location">
          <p className="profile-city">
            {profile.city + ", " + profile.country}</p>
        </span>

        {/* follow button  */}
        <button className="follow-button">Follow</button>
      </div>

        <div className="profile-bio-and-stats-container">
          <p className="profile-about">{ profile.about }</p>
      </div>
    </div>
  )
}