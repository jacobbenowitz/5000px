import React from "react";
import NavListItem from "./nav_list_item";

const discoverLinks = [
  { title: 'Popular photos', url: '/discover/popular' },
  { title: 'Upcoming photos', url: '/discover/upcoming' },
  { title: 'Fresh photos', url: '/discover/fresh' },
  { title: 'Editors Choice', url: '/discover/editors' }
]

const DiscoverNavModal = ({ klass, toggleModal }) => {
  return (
    <div id="discover-modal"
      className={"nav-modal-container" + klass}
      onClick={toggleModal}
    >
      <ul className="modal-links">
        {discoverLinks.map((link, index) => {
          return (
            <NavListItem link={ link } key={index} />
          )
        })}
      </ul>
    </div>
  )
}

export default DiscoverNavModal