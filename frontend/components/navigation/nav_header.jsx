import React from "react";
import { Link, NavLink } from "react-router-dom";
import primaryLogoBlack from "../../util/primary_logo_black";
import primaryLogoBlue from "../../util/primary_logo_blue";
import DiscoverNavLinkItem from "./discover_nav_link";
import UserNavLink from "./user_nav_link";

export default class NavHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logoHover: false
    }
    this.toggleLogo = this.toggleLogo.bind(this)
  }

  componentDidMount() {
    this.props.fetchCurrentProfile()
  }

  toggleLogo(e) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      logoHover: !this.state.logoHover
    })
  }

  render() {
    const { currentUser, currentProfile, logout } = this.props;
    const { logoHover } = this.state;

    const initials = currentUser ?
      currentUser.username.slice(0, 2).toUpperCase() : "";
    
    let userLinks = currentProfile ? (
      <div id="user-links">
        <UserNavLink
          initials={initials}
          currentProfile={currentProfile} 
          logout={logout}
        />

        <Link to={'/photos/upload'} className="upload-button">
          <div id="upload-button-content">
            <i id="upload-icon" className="fa-solid fa-arrow-up"></i>
            <span>Upload</span>
          </div>
        </Link>
      </div>
    ) : (
        <div id="user-links">
          <li id="login-link">
            <NavLink to={'/login'}>Log in</NavLink>
          </li>
          <li>
            <NavLink to={'/signup'} className="sign-up">Sign up</NavLink>
          </li>
        </div>
    )
      
    return (
      <div id="nav-header">
        <div id="logo-container"
          onMouseEnter={this.toggleLogo}
          onMouseLeave={this.toggleLogo}
        >
          <Link to={'/'}>
            {logoHover ? primaryLogoBlue : primaryLogoBlack}
          </Link>
        </div>
        <div className="nav-links">
          <DiscoverNavLinkItem 
            currentUserId={this.props.currentUser?.id}
          />
        </div>
        <div id="user-links-container">
          {userLinks}
        </div>
      </div>
    );
  };
};