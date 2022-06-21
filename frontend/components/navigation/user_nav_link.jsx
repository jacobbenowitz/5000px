import React from "react";
import UserNavModal from "./user_nav_modal";
import AvatarLgLoader from "../avatar/avatar-loaders/avatar_lg_loader";

const UserNavLink = (
  { currentProfile, logout, userModal, handleUserClick }) => {

  const modalClass = userModal ? "modal-on" : " modal-off";
  const styles = {
    'backgroundImage': `url(${currentProfile?.avatar})`
  }
  return (
    <>
      {
        currentProfile?.avatar ? 
        <div
          id="user-avatar"
          style={styles}
          onClick={handleUserClick}
          className="nav-header avatar-container-sm"
        /> : <AvatarLgLoader />
      }
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