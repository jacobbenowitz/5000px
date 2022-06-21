import React from "react";
import UserNavModal from "./user_nav_modal";
import AvatarLgLoader from "../avatar/avatar-loaders/avatar_lg_loader";

const UserNavLink = (
  { currentProfile, logout, userModal, handleUserClick }) => {
  
  const modalClass = userModal ? "modal-on" : " modal-off";
  let style

  if (!!currentProfile.avatar) {
    style = {
      'backgroundImage': `url(${currentProfile.avatar})`
    }
  } else {
    style = {
      'backgroundImage': `url(https://my5000px-static.s3.amazonaws.com/person-placeholder-300x300.webp)`
    }
  }
  
  return (
    <>
      <div
        id="user-avatar"
        style={style}
        onClick={handleUserClick}
        className="nav-header avatar-container-sm"
      />
      <UserNavModal
        klass={modalClass}
        className={modalClass}
        handleClick={handleUserClick} 
        profile={currentProfile}
        logout={logout}
      />
    </>
  )
      
}

export default UserNavLink;