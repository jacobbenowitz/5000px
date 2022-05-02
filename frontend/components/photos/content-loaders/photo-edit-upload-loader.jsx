import React from "react"
import ContentLoader from "react-content-loader"

const PhotoEditUploadLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#d9d9d9"
    foregroundColor="#ebebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="400" height="400" />
  </ContentLoader>
)

export default PhotoEditUploadLoader

