import React from "react"
import ContentLoader from "react-content-loader"

const FeaturedCardsLoader = (props) => (
  <ContentLoader
    speed={1}
    width={1500}
    height={218}
    viewBox="0 0 1500 218"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    // style={{ width: '100%', height: "100%" }}
    // preserveAspectRatio="none"
  >
    <rect x="0" y="4" rx="0" ry="0" width="422" height="209" />
    <rect x="433" y="4" rx="0" ry="0" width="422" height="209" />
    <rect x="866" y="4" rx="0" ry="0" width="422" height="209" />
    <rect x="1299" y="4" rx="0" ry="0" width="422" height="209" />
  </ContentLoader>
)

export default FeaturedCardsLoader

