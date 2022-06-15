import React from "react";
import { ReactDOM } from "react";
import UserNavModal from "./user_nav_modal";
import AvatarLgLoader from "../avatar/avatar-loaders/avatar_lg_loader";

export default class UserNavLinkItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    const { currentProfile, logout } = this.props;
    const modalClass = this.state.modalOpen ? "modal-on" : " modal-off";
    const styles = {
      'backgroundImage': `url(${currentProfile?.avatar})`
    }
    return (
      <>
        {
          currentProfile?.avatar ? 
          <div
            id="user-avatar"
            style={styles}
            onClick={this.handleClick}
            className="avatar-container-sm"
          /> : <AvatarLgLoader />
        }
        <UserNavModal
          klass={modalClass}
          className={modalClass}
          handleClick={this.handleClick} 
          profile={currentProfile}
          logout={logout}
        />
      </>
    )
      
  }
  
}