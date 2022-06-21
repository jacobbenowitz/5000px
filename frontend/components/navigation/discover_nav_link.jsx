import { relativeTimeThreshold } from "moment";
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
    this.handleBodyClick = this.handleBodyClick.bind(relativeTimeThreshold)
  }

  componentDidMount() {
    window.addEventListener("click", this.handleBodyClick)
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleBodyClick)
  }

  handleBodyClick = e => {
    e.stopPropagation()
    const { collectionModal, discoverModal } = this.state;
    if (collectionModal || discoverModal) {
      this.setState({
        discoverModal: false,
        collectionModal: false,
      })
    }
  }

  handleDiscoverClick(e) {
    e.preventDefault()
    this.setState({
      discoverModal: !this.state.discoverModal,
      collectionModal: false,
    });
  }
  handleCollectionClick(e) {
    e.preventDefault()
    this.setState({
      collectionModal: !this.state.collectionModal,
      discoverModal: false,
    });
  }

  render() {
    const { discoverModal, collectionModal } = this.state;
    const { currentUserId } = this.props;

    let collectionsNav, collectionsModal;

    if (!!currentUserId) {
      collectionsNav = (
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
      )
      collectionsModal = (
        <CollectionNavModal
          toggleModal={this.handleCollectionClick}
          klass={collectionModal ? " modal-on" : " modal-off"}
        />
      )
    }
    
    return (
      <>
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

        {collectionsNav}

        <DiscoverNavModal
          toggleModal={this.handleDiscoverClick}
          klass={discoverModal ? " modal-on" : " modal-off"}
        />
        {collectionsModal}
      </>
    )
      
  }
  
}