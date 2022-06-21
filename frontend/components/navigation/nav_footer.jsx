import React from "react"
import { NavLink, Link } from "react-router-dom";
import primaryLogoBlack from "../../util/primary_logo_black"
import primaryLogoBlue from "../../util/primary_logo_blue"

export default class NavFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logoHover: false
    }
    this.toggleLogo = this.toggleLogo.bind(this)
  }

  toggleLogo(e) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      logoHover: !this.state.logoHover
    })
  }

  render() {
    const { logoHover } = this.state;
    return (
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
              <h5>Developer</h5>
            </div>
            <div className="footer-link-list">
              <div className="footer-icon-link">
                <i className="fa-brands fa-github" />
                <a href={'https://github.com/jacobbenowitz/'}
                  target="_blank" rel="noreferrer"
                >Github</a>
              </div>
              <div className="footer-icon-link">
                <i className="fa-brands fa-linkedin-in" />
                <a href={'https://www.linkedin.com/in/jacobbenowitz/'}
                  target="_blank" rel="noreferrer"
                >LinkedIn</a>
              </div>
              <div className="footer-icon-link">
                <i className="fa-solid fa-link" />
                <a href={'https://www.jacobbenowitz.com/'}
                  target="_blank" rel="noreferrer"
                >Porfolio</a>
              </div>
            </div>
          </div>

          <div className="nav-col-03">
            <div className="footer-header">
              <h5>Project Links</h5>
            </div>
            <div className="footer-link-list">
              <div className="footer-icon-link">
                <i className="fa-brands fa-github" />
                <a href={'https://github.com/jacobbenowitz/5000px'}
                  target="_blank" rel="noreferrer"
                >Github Repo</a>
              </div>
              <div className="footer-icon-link">
                <i className="fa-solid fa-book" />
                <a href={'https://github.com/jacobbenowitz/5000px/wiki'}
                  target="_blank" rel="noreferrer"
                >GitHub Wiki</a>
              </div>
            </div>
          </div>

          <div className="nav-col-04">
            <div className="footer-header">
              <h5>Company</h5>
            </div>
            <div className="footer-link-list">
              <a href={'https://500px.com/'}
                target="_blank" rel="noreferrer"
              >
                Original 500px
              </a>
            </div>
          </div>
        </div>

        <div id="footer-bottom">
          <div className="footer-logo"
            onMouseEnter={this.toggleLogo}
            onMouseLeave={this.toggleLogo}
          >
            <Link to={'/'}>
              {logoHover ? primaryLogoBlue : primaryLogoBlack}
            </Link>
          </div>
          <div id="bottom-footer-links">
            {/* <NavLink to={'#'}>Privacy</NavLink>
            <NavLink to={'#'}>Terms</NavLink> */}
          </div>
        </div>
        
      </div>
    )
  }
}