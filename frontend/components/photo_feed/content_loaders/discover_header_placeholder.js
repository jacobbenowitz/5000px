import React from "react"
import ContentLoader from "react-content-loader"

const DiscoverHeaderLoader = (props) => (
  <ContentLoader
    speed={2}
    width={830}
    height={100}
    viewBox="0 0 830 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ width: '100%'}}
    // preserveAspectRatio="none"
  >
    <rect x="1" y="24" rx="20" ry="20" width="468" height="40" />
    <rect x="1" y="72" rx="12" ry="12" width="315" height="26" />
  </ContentLoader>
)

export default DiscoverHeaderLoader

