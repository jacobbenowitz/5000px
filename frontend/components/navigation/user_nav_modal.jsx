import React from "react";
import { Link } from "react-router-dom";
import NavListItem from "./nav_list_item";


export default class UserNavModal extends React.Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    const userLinks = [
      { title: 'Profile', url: `/profiles/${this.props.profile}` },
      { title: 'Galleries', url: '/galleries' },
      { title: 'Liked photos', url: '/likes' },
      { title: 'Settings', url: '/profiles/settings' }
    ]
    const klass = this.props.klass;
    
    return (
      <div id="user-modal"
        className={"nav-modal-container" + klass}
        onClick={this.props.handleClick}
      >
        <ul>
          {userLinks.map((link, index) => {
            return (
              <NavListItem link={ link } key={index} />
            )
          })}
          <li className="modal-list-item">
            <Link
              to={'/'}
              onClick={this.props.logout}>Logout</Link>
          </li>
        </ul>
      </div>
    )
  }
}
