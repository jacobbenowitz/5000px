import React from "react";
import { Link } from "react-router-dom";

export default class NavHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {currentUser, logout} = this.props;

    const greeting = currentUser ? (
      <>
        <li>Welcome {currentUser.username}!</li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </>
    ) : (
        <>
          <li>
            <Link to={'/signup'}>Sign up</Link>
          </li>
          <li>
            <Link to={'/login'}>Log in</Link>
          </li>
        </>
    )
      
    return (
      <div id="nav-header">
        <ul id="greeting">
          {greeting}
        </ul>
      </div>
    );
  };
};