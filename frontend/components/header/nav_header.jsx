import React from "react";

export default class NavHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.currentUser)
    return (
      <div id="nav-header">
        <ul id="greeting">
          <li></li>
        </ul>

      </div>
    )
  }
}