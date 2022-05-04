import React from "react"
import ContentLoader from "react-content-loader"

const PhotoLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={100}
    height={100}
    viewBox="0 0 100 100"
    style={{ width: '100%' }}
    backgroundColor="#dedede"
    foregroundColor="#ededed"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="500" height="400" />
  </ContentLoader>
)

export default PhotoLoader;

