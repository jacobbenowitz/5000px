import React from "react";
import { NavLink } from "react-router-dom";
import CollectionNavModal from "./collection_nav_modal";
import DiscoverNavModal from "./discover_nav_modal";


export default class DiscoverNavLinkItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      discoverModal: false,
      collectionModal: false,
    };

    this.handleDiscoverClick = this.handleDiscoverClick.bind(this);
    this.handleCollectionClick = this.handleCollectionClick.bind(this);
  }

  handleDiscoverClick(e) {
    e.preventDefault()
    this.setState({
      discoverModal: !this.state.discoverModal
    });
  }
  handleCollectionClick(e) {
    e.preventDefault()
    this.setState({
      collectionModal: !this.state.collectionModal
    });
  }

  render() {
    const { discoverModal, collectionModal } = this.state;
    const { currentUserId } = this.props;
    
    return (
      <>
        <NavLink to={currentUserId ? '/home' : '/'}>
          Home
        </NavLink>
        <div className="dropdown-nav"
          onClick={this.handleDiscoverClick}
        >
          <span className="nav-pseduo">
            Discover
          </span>
          <div className="down-arrow-wrapper">
            <i className="fa-solid fa-angle-down fa-sm" />
          </div>
        </div>

        <div className="dropdown-nav"
          onClick={this.handleCollectionClick}
        >
          <span className="nav-pseduo">
            Collections
          </span>
          <div className="down-arrow-wrapper">
            <i className="fa-solid fa-angle-down fa-sm" />
          </div>
        </div>

        <DiscoverNavModal
          toggleModal={this.handleDiscoverClick}
          klass={discoverModal ? " modal-on" : " modal-off"}
        />
        <CollectionNavModal
          toggleModal={this.handleCollectionClick}
          klass={collectionModal ? " modal-on" : " modal-off"}
        />
      </>
    )
      
  }
  
}