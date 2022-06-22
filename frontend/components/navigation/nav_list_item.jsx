import React from "react";
import { NavLink } from "react-router-dom";

const NavListItem = props => {

  const { title, url } = props.link;
  return (
    <NavLink
      to={url}>
      <li className="modal-list-item">
        {title} 
      </li>
    </NavLink>
  )
}

export default NavListItem;