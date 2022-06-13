import React from 'react'
import ContentLoader from 'react-content-loader'

const GridLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={800}
    height={405}
    viewBox="0 0 800 405"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    // style={{ width: '100%' }}
    style={{ width: '100%', height: "100%" }}
    preserveAspectRatio="none"
  >
    <rect x="34" y="15" rx="0" ry="0" width="219" height="219" />
    <rect x="263" y="15" rx="0" ry="0" width="329" height="219" />
    <rect x="602" y="15" rx="0" ry="0" width="164" height="219" />
    <rect x="34" y="245" rx="0" ry="0" width="251" height="153" />
    <rect x="295" y="244" rx="0" ry="0" width="230" height="153" />
    <rect x="536" y="245" rx="0" ry="0" width="230" height="153" />
  </ContentLoader>
)

export default GridLoader