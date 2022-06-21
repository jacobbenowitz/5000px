import React from "react";

const ProfileAvatar = (avatar) => {
  const placeholderImg = "https://my5000px-static.s3.amazonaws.com/person-placeholder-300x300.jpg";

  return avatar ? (
      <div className="avatar-container-sm">
        <img src={avatar}
          className='avatar-img' 
        />
      </div>
  ) : (
    <div className="avatar-container-sm">
        <img src={placeholderImg}
          className='avatar-img' 
        />
    </div>
  )
}

export default ProfileAvatar