import React from "react"
import ContentLoader from "react-content-loader"

const CollectionHeaderPlaceholder = (props) => (
  <ContentLoader
    speed={2}
    width={830}
    height={200}
    viewBox="0 0 830 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ width: '100%' }}
  >
    <rect x="290" y="3" rx="20" ry="20" width="265" height="32" />
    <rect x="154" y="57" rx="6" ry="6" width="530" height="16" />
    <rect x="156" y="79" rx="6" ry="6" width="530" height="16" />
    <rect x="213" y="102" rx="6" ry="6" width="413" height="16" />
    <rect x="343" y="170" rx="6" ry="6" width="160" height="16" />
    <circle cx="422" cy="145" r="18" />
  </ContentLoader>
)

export default CollectionHeaderPlaceholder

