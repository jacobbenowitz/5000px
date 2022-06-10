import React from 'react' 

const CollectionGridCard = ({photos}) => { 
  const styleBg = (src) => {
    return { backgroundImage: `url(${src})` }
  }
  return (
    <div className="ft-grid-wrapper">
      <div className="featured-grid-container">
        <div className="ft-grid-top-label">
          <span className="ft-label">
            Minimalism | Collection
          </span>
        </div>
        <div className="ft-grid-img-wrapper ft-large ft-top"
          style={styleBg(photos[0].thumbnailUrl)}
        />
        <div className="ft-grid-img-wrapper ft-small"
          style={styleBg(photos[1].thumbnailUrl)}
        />
        <div className="ft-grid-img-wrapper"
          style={styleBg(photos[2].thumbnailUrl)}
        />
      </div>
    </div>
  )
}

export default CollectionGridCard