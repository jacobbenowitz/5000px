import React from "react"
import AvatarLgLoader from "./avatar-loaders/avatar_lg_loader"

export const AvatarLg = props => {
  const { avatar } = props.profile;
  debugger
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