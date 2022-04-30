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

    return (
      <>
        <div id="user-avatar"
          onClick={this.handleClick}>
        <span>{this.props.initials}</span>
        </div>
        <UserNavModalContainer
          klass={modalClass}
          handleClick={this.handleClick} />
      </>
    )
      
  }
  
}