import React from "react"
import AvatarLgLoader from "./avatar-loaders/avatar_lg_loader"

const placeholderImg = "https://my5000px-static.s3.amazonaws.com/person-placeholder-300x300.webp";

export const AvatarLg = ({ profile }) => {
  let avatarUrl;
  if (profile) {
    avatarUrl = profile.avatar
  } else {
    avatarUrl = placeholderImg
  }

  const styles = {
    'backgroundImage': `url(${avatarUrl})`
  }

  return (
      <div className="avatar-wrapper profile" style={styles} />
  )
}