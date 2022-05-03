import React from "react"
import ContentLoader from "react-content-loader"

const PhotoEditFormLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={400}
    height={650}
    viewBox="0 0 400 650"
    backgroundColor="#dedede"
    foregroundColor="#ededed"
    {...props}
  >
    <rect x="30" y="135" rx="3" ry="3" width="88" height="6" /> 
    <rect x="30" y="46" rx="3" ry="3" width="52" height="6" /> 
    <rect x="30" y="331" rx="3" ry="3" width="40" height="6" /> 
    <rect x="30" y="417" rx="3" ry="3" width="44" height="7" /> 
    <rect x="30" y="505" rx="3" ry="3" width="56" height="6" /> 
    <rect x="30" y="152" rx="0" ry="0" width="338" height="152" /> 
    <rect x="30" y="349" rx="0" ry="0" width="338" height="38" /> 
    <rect x="37" y="524" rx="0" ry="0" width="274" height="40" /> 
    <rect x="30" y="437" rx="0" ry="0" width="262" height="42" /> 
    <rect x="30" y="68" rx="0" ry="0" width="338" height="38" /> 
    <rect x="101" y="605" rx="3" ry="3" width="56" height="6" /> 
    <rect x="173" y="583" rx="22" ry="22" width="142" height="48" />
    <rect x="0" y="0" rx="8" ry="8" width="400" height="650" /> 
  </ContentLoader>
)

export default PhotoEditFormLoader

