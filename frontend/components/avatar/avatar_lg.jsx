import React from "react"
import AvatarLgLoader from "./avatar-loaders/avatar_lg_loader"

const placeholderImg = "/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/placeholder-image.png";

export const AvatarLg = ({profile}) => {
  const { avatar } = profile ? profile : placeholderImg;
  const styles = {
    'backgroundImage': `url(${avatar})`
  }

  return (
      <div className="avatar-wrapper" style={styles}>
        {/* {avatar ? (
          <img src={avatar} className="avatar-img" />
        ): (
          <AvatarLgLoader />
        )} */}
      </div>
  )
}