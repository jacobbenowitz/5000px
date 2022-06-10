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
        <div className="dropdown-nav">
          <span className="nav-pseduo"
            onClick={this.handleClick}
          >
            Discover
          </span>
          <div className="down-arrow-wrapper">
            <i className="fa-solid fa-angle-down fa-sm" />
          </div>
        </div>

        <DiscoverNavModal
          klass={modalClass}
        />
      </>
    )
      
  }
  
}