import React from "react";
import { Link } from "react-router-dom";

const NavListItem = props => {

  const { title, url } = props.link;
  return (
    <li className="modal-list-item">
      <Link to={ url }> { title } </Link>
    </li>
  )
}

export default NavListItem;