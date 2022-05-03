import React from "react"
import ContentLoader from "react-content-loader"

const CoverPhotoLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={1500}
    height={370}
    viewBox="0 0 1500 370"
    // style={{ width: '100%'}}
    backgroundColor="#dedede"
    foregroundColor="#ededed"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="1500" height="370" />
  </ContentLoader>
)

export default CoverPhotoLoader

