import React from "react";
import { Link } from "react-router-dom";

const heroH1 = (
  <h1 className="hero-h1">Discover and share breath-taking photos</h1>
);

const heroTagline = (
  <p className="hero-tagline">Get inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads—just great photography.</p>
);

const heroCredit = (
  <span className="photo-credit">Photo by <strong>Photographer Name</strong></span>
);

const Hero = props => (
    <div id='hero-container' >
      <div id='hero-content'>
        <div id='hero-text'>
          { heroH1 }
          { heroTagline}
          <Link to={'/signup'} className="sign-up-large">Sign up</Link>
        </div>
      </div>
    
      <div className="hero-graphic">
        <img src="https://my5000px-static.s3.amazonaws.com/hero_graphic/size%3Dlarge.svg" />
      </div>

    </div>
)

export default Hero