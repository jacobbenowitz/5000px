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
        <NavLink
          to={'#'}
          onClick={this.handleClick}
        >Discover</NavLink>
        <DiscoverNavModal
          klass={modalClass} />
      </>
    )
      
  }
  
}