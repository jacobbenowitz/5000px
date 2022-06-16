import React from "react";
import NavListItem from "./nav_list_item";

const collectionLinks = [
  { title: 'Abstract', url: '/galleries/abstract' },
  { title: 'Animals', url: '/galleries/animals' },
  { title: 'Chocolate', url: '/galleries/chocolate' },
  { title: 'Music', url: '/galleries/music' },
  { title: 'Minimalism', url: '/galleries/minimalism' },
  { title: 'Sports', url: '/galleries/sports' },
]


const CollectionNavModal = ({ klass, toggleModal }) => {
  return (
    <div id="collection-modal"
      className={"nav-modal-container" + klass}
      onClick={toggleModal}
    >
      <ul className="modal-links">
        {collectionLinks.map((link, index) => {
          return (
            <NavListItem link={ link } key={index} />
          )
        })}
      </ul>
    </div>
  )
}

export default CollectionNavModal
