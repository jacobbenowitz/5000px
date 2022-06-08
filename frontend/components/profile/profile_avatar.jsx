import React from "react";

const ProfileAvatar = (avatar) => {
  
  return avatar ? (
      <div className="avatar-container-sm">
      <img src={avatar} />
      <img src={avatar} className='avatar-img' />
      </div>
  ) : (
    <div className="avatar-container-sm">
      <span>Loader here</span>
    </div>
  )
}

export default ProfileAvatar