import React from 'react' 

const FeedHeader = ({ title, description }) => (
  <div className="page-top-banner">
    <h2>
      {title}
    </h2>

    <span className="sub-header-text">
      {description}
    </span>
  </div>
)

export default FeedHeader