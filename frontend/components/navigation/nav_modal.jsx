import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavModal = props => {
  const links = props.links;
  return (
    <div className="nav-modal-container">
      <ul>
        {links.map(link => (
          <li className="modal-list-item">
            <NavLink to={ link.url }> { link.title } </NavLink>
          </li>
        )) }
      </ul>
    </div>
  )
}