import React from "react"
import { Link } from "react-router-dom"

const SinglePhotoLarge = ({ photo, profile }) => { 
  return (
    <Link
      to={photo.showLink}
      className="image-wrapper"
      onMouseOver={e => {
        e.target.setAttribute('data-before', profile.name)
      }}
      style={{
        boxSizing: "content-box",
        alignItems: "center",
        width: '100%',
        // height: style?.height,
      }}
    >
      <div className="single-photo-card"
        // todo: hover content -> link to profile
        style={{ backgroundImage: `url(${photo.thumbnailUrl})` }}
      />
    </Link>
  )
}

export default SinglePhotoLarge