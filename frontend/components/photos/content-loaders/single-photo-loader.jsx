// credit to https://skeletonreact.com/

import React from "react"
import ContentLoader from "react-content-loader"

const SinglePhotoLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1000}
    height={600}
    viewBox="0 0 1000 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="1000" height="600" />
  </ContentLoader>
)

export default SinglePhotoLoader