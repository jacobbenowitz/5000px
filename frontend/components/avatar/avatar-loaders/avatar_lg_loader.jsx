import React from "react"
import ContentLoader from "react-content-loader"

const AvatarLgLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={95}
    height={95}
    viewBox="0 0 95 95"
    backgroundColor="#dedede"
    foregroundColor="#ededed"
    {...props}
  >
    <circle cx="35" cy="35" r="35" />
  </ContentLoader>
)

export default AvatarLgLoader

