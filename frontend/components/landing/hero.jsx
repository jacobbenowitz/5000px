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

export const Hero = (
    <div id='hero-container' >
      <div id='hero-content'>
        <div id='hero-text'>
          { heroH1 }
          { heroTagline}
          <Link to={'/signup'} className="sign-up-large">Sign up</Link>
        </div>
      </div>
      <div className="hero-graphic">
        <svg width="1512" height="146" viewBox="0 0 1512 146" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1256.05 0.974121C1372.61 0.974121 1456.64 19.7884 1512 39.3191V145.974H251.253H0C0.000699436 84.682 0.000519033 54.1141 0.000600544 4.95767C91.3681 81.4412 347.398 98.9687 476.918 98.9687C606.439 98.9687 692.787 94.1884 864.478 50.3698C1036.17 6.55107 1127.56 0.974121 1256.05 0.974121Z" fill="white"/>
        </svg>
      </div>
    </div>
)