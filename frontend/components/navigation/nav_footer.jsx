import React from "react"
import { NavLink, Link } from "react-router-dom";

const NavFooter = () => (
  <div id="navFooter">
    <div id="footer-top">
      <div className="nav-col-01">
        <div className="footer-header">
          <h5>Discover</h5>
        </div>
        <div className="footer-link-list">
          <NavLink to={'/discover/popular'}>Popular photos</NavLink>
          <NavLink to={'/discover/upcoming'}>Upcoming photos</NavLink>
          <NavLink to={'/discover/fresh'}>Fresh photos</NavLink>
          <NavLink to={'/discover/editors'}>Editors Choice</NavLink>
        </div>
      </div>

      <div className="nav-col-02">
        <div className="footer-header">
          <h5>Company</h5>
        </div>
        <div className="footer-link-list">
          <Link to={'https://500px.com/'}>Original 500px</Link>
        </div>
        
      </div>

      <div className="nav-col-03">
        <div className="footer-header">
          <h5>Social</h5>
        </div>
        <div className="footer-link-list">
          <NavLink to={'https://github.com/jacobbenowitz/'}>Github</NavLink>
          <NavLink to={'https://www.linkedin.com/in/jacobbenowitz/'}>LinkedIn</NavLink>
          <NavLink to={'https://www.jacobbenowitz.com/'}>Porfolio</NavLink>
        </div>
      </div>

      <div className="nav-col-04">
        <div className="footer-header">
          <h5>Project Links</h5>
        </div>
        <div className="footer-link-list">
          <Link to={'https://github.com/jacobbenowitz/5000px'}>
            Github Repo
          </Link>
          <Link to={'https://github.com/jacobbenowitz/5000px/wiki'}>
            GitHub Wiki
          </Link>
        </div>
      </div>
    </div>

    <div id="footer-bottom">
      <div className="footer-logo">
        <Link to={'/'}>
          <img className="primary-logo-header"
            src="https://my5000px-static.s3.amazonaws.com/5000px-logo.svg" />
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