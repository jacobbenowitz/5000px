import React from "react";
import { NavLink } from "react-router-dom";
import DiscoverNavModal from "./discover_nav_modal";


export default class DiscoverNavLinkItem extends React.Component {

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
        <NavLink to={'/home'}>
          Home
        </NavLink>
        <div className="dropdown-nav"
          onClick={this.handleClick}
        >
          <span className="nav-pseduo">
            Discover
          </span>
          <div className="down-arrow-wrapper">
            <i className="fa-solid fa-angle-down fa-sm" />
          </div>
        </div>

        <DiscoverNavModal
          toggleModal={this.handleClick}
          klass={modalClass}
        />
      </>
    )
      
  }
  
}