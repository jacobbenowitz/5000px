import React from "react";
import { NavLink } from "react-router-dom";
import CollectionNavModal from "./collection_nav_modal";
import DiscoverNavModal from "./discover_nav_modal";


const DiscoverNavLinks = (
  { currentUserId, discoverModal, collectionModal, handleCollectionClick, handleDiscoverClick }) => {

  let collectionsNav, collectionsModal;

  if (!!currentUserId) {
    collectionsNav = (
      <div className="dropdown-nav"
        onClick={handleCollectionClick}
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
        toggleModal={handleCollectionClick}
        klass={collectionModal ? " modal-on" : " modal-off"}
      />
    )
  }

  return (
    <>
      <div className="dropdown-nav"
        onClick={handleDiscoverClick}
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
        toggleModal={handleDiscoverClick}
        klass={discoverModal ? " modal-on" : " modal-off"}
      />
      {collectionsModal}
    </>
  )
}

export default DiscoverNavLinks