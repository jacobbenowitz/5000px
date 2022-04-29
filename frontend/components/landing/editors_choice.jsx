import React from "react";
import { Link } from "react-router-dom";

const photoCredit = (
  <span className="photo-credit">Photo by <strong>Photographer Name</strong></span>
);

export const EditorsChoiceLanding = (
  <div id="editors-choice-landing">
    <div className="landing-image-header">
      <div className="landing-header-content">
        <div className="icon-container">
          <img src="https://my5000px-static.s3.amazonaws.com/editors-choice.svg" />
        </div>
        <h2>Editor's Choice</h2>
        { photoCredit }
      </div>
    </div>

    <div id="editors-gallery"
      className="landing-gallery-container">
      <div className="landing-gallery-header">
        <h4>The best of the best.</h4>
        <span>Our editors are always on the lookout for jaw dropping content for you to discover and stay inspired. Check back weekly to see what’s new.</span>
        <Link to={'/editors'} className="landing-large-button">View Editor's Choice</Link>
      </div>
      
      <div className="image-gallery-2-row">
        <div className="editors-gallery-row">

          <div className="editors-gallery-col">
            <div className="editors-box">
              <Link to={'#'} >
                <img className="editors-gal-img"
                  src="https://my5000px-static.s3.amazonaws.com/800px/silhouette-of-boy-throwing-a-net-into-the-water.jpg" alt="Photo by Username" />
              </Link>
              <div className="editors-img-attribution">
                <Link to={'#'} className="img-attribution-link">
                  <span>Photo by Username</span>
                </Link>
              </div>
            </div>

            <div className="editors-box">
              <Link to={'#'} >
                <img className="editors-gal-img"
                  src="https://my5000px-static.s3.amazonaws.com/800px/silhouette-of-fitness-woman-running-on-the-beach.jpg" />
              </Link>
              <div className="editors-img-attribution">
                <Link to={'#'} className="img-attribution-link">
                  <span>Photo by Username</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="editors-gallery-col">

            <div className="editors-box">
              <Link to={'#'} >
                <img className="editors-gal-img"
                  src="https://my5000px-static.s3.amazonaws.com/800px/lost-in-the-city.jpg" alt="Photo by Username" />
              </Link>
              <div className="editors-img-attribution">
                <Link to={'#'} className="img-attribution-link">
                  <span>Photo by Username</span>
                </Link>
              </div>
            </div>

            <div className="editors-box">
              <Link to={'#'} >
                <img className="editors-gal-img"
                  src="https://my5000px-static.s3.amazonaws.com/800px/red-fox-cub-vulpes-vulpes.jpg" alt="Photo by Username" />
              </Link>
              <div className="editors-img-attribution">
                <Link to={'#'} className="img-attribution-link">
                  <span>Photo by Username</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="editors-gallery-col">
            <div className="editors-box">
              <Link to={'#'} >
                <img className="editors-gal-img"
                  src="https://my5000px-static.s3.amazonaws.com/800px/los-angeles-vibes.jpg" alt="Photo by Username" />
              </Link>
              <div className="editors-img-attribution">
                <Link to={'#'} className="img-attribution-link">
                  <span>Photo by Username</span>
                </Link>
              </div>
            </div>

            <div className="editors-box">
              <Link to={'#'} >
                <img className="editors-gal-img"
                  src="https://my5000px-static.s3.amazonaws.com/800px/moody-autumn-day-in-the-dolomites-forest.jpg" alt="Photo by Username" />
              </Link>
              <div className="editors-img-attribution">
                <Link to={'#'} className="img-attribution-link">
                  <span>Photo by Username</span>
                </Link>
              </div>
            </div>
            
          </div>

          <div className="editors-gallery-col">
            <div className="editors-box">
              <Link to={'#'} >
                <img className="editors-gal-img"
                  src="https://my5000px-static.s3.amazonaws.com/800px/jazz-performer-plays-the-saxophone.jpg" alt="" />
              </Link>
              <div className="editors-img-attribution">
                <Link to={'#'} className="img-attribution-link">
                  <span>Photo by Username</span>
                </Link>
              </div>
            </div>
            
            <div className="editors-box">
              <Link to={'#'} >
                <img className="editors-gal-img"
                  src="https://my5000px-static.s3.amazonaws.com/800px/moody-autumn-day-in-the-dolomites-forest.jpg" alt="Photo by Username" />
              </Link>
              <div className="editors-img-attribution">
                <Link to={'#'} className="img-attribution-link">
                  <span>Photo by Username</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


  </div>
)