import React from "react";
import UserNavModalContainer from "./user_nav_modal_container";


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
    const avatar = this.props.currentProfile.avatar
    return (
      <>
        <div id="user-avatar"
          onClick={this.handleClick}
          className="avatar-container-sm">
        {avatar ? (
          <img src={avatar} className="avatar-img" />
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