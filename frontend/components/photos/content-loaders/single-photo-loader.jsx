// credit to https://skeletonreact.com/

import React from "react"
import ContentLoader from "react-content-loader"

const SinglePhotoLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={600}
    height={450}
    viewBox="0 0 600 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ width: '100%' }}
  >
    <rect x="0" y="0" rx="0" ry="0" width="600" height="450" />
  </ContentLoader>
)

export default SinglePhotoLoader