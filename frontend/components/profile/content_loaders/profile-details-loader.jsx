import React from "react"
import ContentLoader from "react-content-loader"

const ProfileDetailsLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={600}
    height={190}
    viewBox="0 0 600 190"
    backgroundColor="#dedede"
    foregroundColor="#ededed"
    preserveAspectRatio="none"
    style={{ width: '100%', height: '100%' }}
  >
    <rect x="163" y="11" rx="8" ry="8" width="269" height="21" /> 
    <rect x="229" y="36" rx="8" ry="8" width="141" height="18" /> 
    <rect x="248" y="65" rx="13" ry="13" width="105" height="26" /> 
    <rect x="95" y="107" rx="8" ry="8" width="399" height="12" /> 
    <rect x="135" y="124" rx="8" ry="8" width="305" height="11" /> 
    <rect x="66" y="153" rx="8" ry="8" width="89" height="12" /> 
    <rect x="163" y="153" rx="8" ry="8" width="89" height="12" /> 
    <rect x="260" y="153" rx="8" ry="8" width="103" height="12" /> 
    <rect x="378" y="153" rx="8" ry="8" width="150" height="12" />
  </ContentLoader>
)

export default ProfileDetailsLoader

