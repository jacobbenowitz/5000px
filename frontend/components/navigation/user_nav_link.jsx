import React from "react";
import { ReactDOM } from "react";
import UserNavModalContainer from "./user_nav_modal_container";
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

    const modalClass = this.state.modalOpen ? "" : " modal-off";
    debugger
    return (
      <>
        <div id="user-avatar"
          onClick={this.handleClick}
          className="avatar-container-sm">
          
        {this.props.currentProfile.avatar ? (
            <img src={this.props.currentProfile.avatar}
              className="avatar-img" />
          ): (
            <AvatarLgLoader />
        )}
      </div>
        <UserNavModalContainer
          klass={modalClass}
          className={modalClass}
          handleClick={this.handleClick} />
      </>
    )
      
  }
  
}

        // <div id="user-avatar"
        //   onClick={this.handleClick}>
        // <span>{this.props.initials}</span>
        // </div>