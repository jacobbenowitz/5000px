import React from 'react' 

const FeedHeader = ({ title, description }) => (
  <div className="page-top-banner">
    {title == 'Liked Photos' ? 
      <h4> {title} </h4> : <h2> {title} </h2>
    }

    <span className="sub-header-text">
      {description}
    </span>
  </div>
)

export default FeedHeader