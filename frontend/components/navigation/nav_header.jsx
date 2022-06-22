import React from "react";
import { Link, NavLink } from "react-router-dom";
import primaryLogoBlack from "../../util/primary_logo_black";
import primaryLogoBlue from "../../util/primary_logo_blue";
import DiscoverNavLinks from "./discover_nav_link";
import UserNavLink from "./user_nav_link";

export default class NavHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logoHover: false,
      discoverModal: false,
      collectionModal: false,
      userModal: false,
    }
    this.bindHandlers()
  }

  bindHandlers() {
    this.toggleLogo = this.toggleLogo.bind(this)
    this.handleWindowClick = this.handleWindowClick.bind(this)
    this.handleCollectionClick = this.handleCollectionClick.bind(this)
    this.handleDiscoverClick = this.handleDiscoverClick.bind(this)
    this.handleUserClick = this.handleUserClick.bind(this)
  }

  componentDidMount() {
    const { currentProfileId, fetchCurrentProfile } = this.props;
    this.mounted = true;
    if (!!currentProfileId) {
      fetchCurrentProfile(currentProfileId)
    }
  }

  componentDidUpdate() {
    const { currentProfile, currentProfileId,
      fetchCurrentProfile } = this.props;
    if (!currentProfile && !!currentProfileId) {
      fetchCurrentProfile(currentProfileId)
    }
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleWindowClick)
    this.mounted = false;
  }

  handleWindowClick = e => {
    e.stopPropagation()
    const { collectionModal, discoverModal, userModal } = this.state;
    if (collectionModal || discoverModal || userModal) {
      this.setState({
        discoverModal: false,
        collectionModal: false,
        userModal: false,
      })
    }
  }

  handleDiscoverClick(e) {
    e.preventDefault()
    e.stopPropagation()
    window.addEventListener("click", this.handleWindowClick)

    this.setState({
      discoverModal: !this.state.discoverModal,
      collectionModal: false,
      userModal: false,
    });
  }

  handleCollectionClick(e) {
    e.preventDefault()
    e.stopPropagation()
    window.addEventListener("click", this.handleWindowClick)

    this.setState({
      collectionModal: !this.state.collectionModal,
      discoverModal: false,
      userModal: false,
    });
  }

  handleUserClick(e) {
    e.stopPropagation()
    window.addEventListener("click", this.handleWindowClick)
    this.setState({
      userModal: !this.state.userModal,
      discoverModal: false,
      collectionModal: false,
    });
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
    const { logoHover, collectionModal, discoverModal, userModal } = this.state;

    const initials = currentUser ?
      currentUser.username.slice(0, 2).toUpperCase() : "";

    let userLinks = currentProfile ? (
      <div id="user-links">
        <UserNavLink
          initials={initials}
          currentProfile={currentProfile}
          logout={logout}
          userModal={userModal}
          handleUserClick={this.handleUserClick}
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
          <DiscoverNavLinks
            currentUserId={this.props.currentUser?.id}
            handleCollectionClick={this.handleCollectionClick}
            handleDiscoverClick={this.handleDiscoverClick}
            discoverModal={discoverModal}
            collectionModal={collectionModal}
          />
        </div>
        <div id="user-links-container">
          {userLinks}
        </div>
      </div>
    );
  };
};