import React from "react";
import { Link } from "react-router-dom";
import NavListItem from "./nav_list_item";


const UserNavModal = ({ profile, klass, handleClick, logout }) => {
  const userLinks = [
    { title: 'Profile', url: `/profiles/${profile.id}` },
    // { title: 'Galleries', url: '/galleries' },
    { title: 'Liked photos', url: '/galleries/likes' },
    { title: 'Settings', url: '/profiles/settings' }
  ]

  return (
    <div id="user-modal"
      className={"nav-modal-container " + klass}
      onClick={handleClick}
    >
      <ul className="modal-links">
        {userLinks.map((link, index) => {
          return (
            <NavListItem link={ link } key={`user-link-${index}`} />
          )
        })}
        <Link to={'/'} onClick={logout}>
          <li className="modal-list-item">
              Logout
          </li>
      </Link>
      </ul>
    </div>
  )
}
export default UserNavModal;