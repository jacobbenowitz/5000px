import React from "react";
import NavListItem from "./nav_modal_item";

  const discoverLinks = [
    { title: 'Popular photos', url: '/popular' },
    { title: 'Upcoming photos', url: '/upcoming' },
    { title: 'Fresh photos', url: '/fresh' },
    { title: 'Editors Choice', url: '/editors-choice' }
  ]
export default class DiscoverNavModal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const klass = this.props.klass;

    return (
      <div className={"nav-modal-container" + klass}>
        <ul>
          {discoverLinks.map((link, index) => {
            return (
              <NavListItem link={ link } key={index} />
            )
          })}
        </ul>
      </div>
    )
  }
}
