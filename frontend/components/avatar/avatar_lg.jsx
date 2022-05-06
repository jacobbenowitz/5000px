import React from "react"
import AvatarLgLoader from "./avatar-loaders/avatar_lg_loader"

const placeholderImg = "/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/placeholder-image.png";

export const AvatarLg = props => {
  
  const { avatar } = props.profile ? props.profile : placeholderImg;
  // debugger
  return (
      <div className="avatar-wrapper">
        {avatar ? (
          <img src={avatar} className="avatar-img" />
        ): (
          <AvatarLgLoader />
        )}
      </div>
  )
}