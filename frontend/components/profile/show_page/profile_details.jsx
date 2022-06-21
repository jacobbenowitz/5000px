import React from "react";
import { Link } from "react-router-dom";
import FollowProfileButton from "../../action_components/follow_profile_button";
import FollowersModal from "../../modal/followers_modal";
import FollowingModal from "../../modal/following_modal"

export const ProfileDetails = ({ profile, user, currentProfile,
  isCurrentProfile, allFollows, createFollow, removeFollow,
  toggleFollowsModal, showFollowsModal, showFollowingModal, toggleFollowingModal, fetchProfile }) => {
  
  let location, name, profileStats, profileLinks, websiteLink, instagramLink, followProfileButton;
  
  profileStats = (
    <div className="profile-stats-wrapper flex-row">
      <div className="profile-stats-section flex-row following"
        onClick={toggleFollowingModal}
      >
        <span className="stats-reg">{profile.following.length}</span>
        <span className="stats-bold">Following</span>
      </div>
      <div className="profile-stats-section flex-row followers"
        onClick={toggleFollowsModal}
      >
        <span className="stats-reg">{profile.followers.length}</span>
        <span className="stats-bold">Followers</span>
      </div>
      <div className="profile-stats-section flex-row likes">
        <span className="stats-reg">{profile.likesReceived.length}</span>
        <span className="stats-bold">Likes received</span>
      </div>
    </div>
  )

  if (profile.website_url) {
    websiteLink = (
      <a
        href={profile.website_url}
        target="_blank" rel="noreferrer"
        className="social-icon-link"
      >
        <i className="fa-solid fa-globe fa-xl" />
      </a>
    )
  }
  if (profile.instagram_url) {
    instagramLink = (
      <a
        href={`https://www.instagram.com/${profile.instagram_url}`}
        target="_blank" rel="noreferrer"
        className="social-icon-link"
      >
        <i className="fa-brands fa-instagram fa-xl" />
      </a>
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

  if (!!Object.values(allFollows).length && !isCurrentProfile) {
    followProfileButton = (
      <FollowProfileButton
        followee={profile}
        allFollows={allFollows}
        createFollow={createFollow}
        removeFollow={removeFollow}
        currentProfile={currentProfile}
      />
    )
  }
  
  return (
    <>
      <FollowersModal
        showFollowsModal={showFollowsModal}
        toggleFollowsModal={toggleFollowsModal}
        createFollow={createFollow}
        removeFollow={removeFollow}
        currentProfile={currentProfile}
        followee={profile}
        allFollows={allFollows}
        fetchProfile={fetchProfile}
      />
      <FollowingModal
        showFollowingModal={showFollowingModal}
        toggleFollowingModal={toggleFollowingModal}
        createFollow={createFollow}
        removeFollow={removeFollow}
        currentProfile={currentProfile}
        followee={profile}
        allFollows={allFollows}
        fetchProfile={fetchProfile}
      />
      <div className="profile-wrapper">
        <div className="profile-action-icons">
          {/* SHARE */}
          {/* <div className="icon-box">
            <a href={'#'} className="icon-link share">
              <i className="fa-solid fa-share-nodes fa-xl"></i>
            </a>
          </div> */}
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
          {followProfileButton}
        <div className="profile-bio-and-stats-container">
          <p className="profile-about">
            {profile.about}
          </p>
          {profileStats}
          {profileLinks}
          </div>
        </div>
      </div>
    </>
  )
}