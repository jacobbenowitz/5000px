import React from "react"
import { NavLink, Link } from "react-router-dom";

const NavFooter = () => (
  <div id="navFooter">
    <div id="footer-top">
      <div className="nav-col-01">
        <div className="footer-header">
          <h5>Community</h5>
        </div>
        <div className="footer-link-list">
          <NavLink to={'/'}>Popular photos</NavLink>
          <NavLink to={'/'}>Upcoming photos</NavLink>
          <NavLink to={'/'}>Fresh photos</NavLink>
          <NavLink to={'/'}>Editors Choice</NavLink>
        </div>
      </div>

      <div className="nav-col-02">
        <div className="footer-header">
          <h5>Social</h5>
        </div>
        <div className="footer-link-list">
          <NavLink to={'/'}>Github</NavLink>
          <NavLink to={'/'}>LinkedIn</NavLink>
          <NavLink to={'/'}>Porfolio</NavLink>
        </div>
      </div>

      <div className="nav-col-03">
        <div className="footer-header">
          <h5>Company</h5>
        </div>
        <div className="footer-link-list">
          <Link to={'/'}>Actual 500px</Link>
          <Link to={'/'}>CSS Animation Game</Link>
        </div>
      </div>

      <div className="nav-col-04">
        <div className="footer-header">
          <h5>Download the app</h5>
        </div>
        <div className="footer-link-list">
          <Link to={'/'}>App Store</Link>
          <Link to={'/'}>Play Store</Link>
        </div>
      </div>
    </div>

    <div id="footer-bottom">
      <div className="footer-logo">
        <Link to={'/'}>
          <svg id="primary-logo" data-name="site-primary-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.21 94.44"><path id="_0" data-name="0" d="M255.49,46.67c1.16,23.23-18.85,44.42-43,45.52C188.05,93.3,167,74.12,165.6,49.54S183.46,3.62,208.35,2.27C233.64.9,254.17,20.23,255.49,46.67Zm-80.4.57a35.25,35.25,0,1,0,35.22-35A35,35,0,0,0,175.09,47.24Z" /><path id="_0-2" data-name="0" d="M68.92,47.06C69,22.38,89.09,2.18,113.58,2.21s45.29,20.57,45.33,45-20.49,44.95-45.16,45A45,45,0,0,1,68.92,47.06Zm45-34.85A35.31,35.31,0,0,0,78.26,47.5c-.06,19,15.87,35.13,34.77,35.2a35.55,35.55,0,0,0,35.89-35.62C149.05,28.25,133,12.29,113.9,12.21Z" /><path id="_5" data-name="5" d="M12.87,12.06V33.23c6.91-1.4,13.73-3.89,20.58-3.93,15-.1,28.09,12.19,29.64,26.47,1.78,16.31-7.58,30.65-22.69,34.81a32,32,0,0,1-37.21-17C2,71,1.9,69.17,4.74,67.94c2.6-1.13,4.91-1.84,6.58,1.66C14.84,77,20.61,81.49,28.79,82.86a22.83,22.83,0,0,0,22.07-9.64c4.93-7.55,4.92-18-.58-25.31s-12.84-11-22.19-9.31c-6.26,1.14-11.28,4.46-15.66,9.1a7.21,7.21,0,0,1-5.79,1.6c-1.09-.21-2.41-2.88-2.44-4.47-.2-12-.07-24-.13-36,0-3.89,1.51-5.74,5.66-5.7q20.47.21,41,0c3.23,0,4.54,1.09,4.57,4.27s-1.54,4.34-4.62,4.32c-11.49-.07-23,0-34.47,0C15.2,11.74,14.23,11.92,12.87,12.06Z" /><g id="px"><path d="M359.93,45.21c0-6.49-.22-13,.05-19.47.44-10.59,8-20,17.55-22.43,11.06-2.81,20.58.81,26.22,10.15,4.73,7.84,4.57,15.84-.13,23.56-4.4,7.23-10.95,11.45-19.53,12-2.47.16-5.39.06-5.32-3.55.05-3,.86-5.18,4.91-5.3A14.74,14.74,0,0,0,398.1,25.35c-.16-7.35-6.86-13.71-14.44-13.7A14.49,14.49,0,0,0,369,26.14c-.24,12.48-.11,25-.05,37.45,0,3.26-.15,5.94-4.5,6-4.51.11-4.57-2.73-4.55-5.94.05-6.16,0-12.32,0-18.48Z" /><path d="M434.84,31.14c-4.83,5-9.21,9.57-13.57,14.14-2.36,2.47-4.64,5.28-8.13,1.54-3.22-3.45-.13-5.38,2-7.34,4.62-4.31,9.39-8.47,14.73-13.26-5.77-5.64-10.47-10.28-15.22-14.85-2.12-2-4.47-4-1.33-6.94s5.33-1,7.58,1.42c4.25,4.65,8.64,9.18,13.5,14.31,4.74-4.73,9.3-9.25,13.81-13.82,2.14-2.17,4.15-4.83,7.36-1.62s.94,5.54-1.53,7.85c-4.5,4.2-8.9,8.5-13.74,13.14C445.38,31,450,36,454.78,40.72c2.13,2.12,3.6,4.07,1,6.68-2.84,2.84-4.65.52-6.52-1.42C444.63,41.2,440,36.44,434.84,31.14Z" /></g><path id="_0-3" data-name="0" d="M352.1,46.67c1.16,23.23-18.85,44.42-43,45.52-24.44,1.11-45.52-18.07-46.89-42.65S280.07,3.62,305,2.27C330.25.9,350.78,20.23,352.1,46.67Zm-80.4.57a35.25,35.25,0,1,0,35.22-35A35,35,0,0,0,271.7,47.24Z" /></svg>
        </Link>
      </div>
      <div id="bottom-footer-links">
        <NavLink to={'/'}>Privacy</NavLink>
        <NavLink to={'/'}>Terms</NavLink>
      </div>
    </div>
    
  </div>
);

export default NavFooter;