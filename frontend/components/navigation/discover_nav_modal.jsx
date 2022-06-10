import React from "react";
import NavListItem from "./nav_list_item";

const discoverLinks = [
  { title: 'Popular photos', url: '/discover/popular' },
  { title: 'Upcoming photos', url: '/discover/upcoming' },
  { title: 'Fresh photos', url: '/discover/fresh' },
  { title: 'Editors Choice', url: '/discover/editors' }
]


export default class DiscoverNavModal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {klass, toggleModal} = this.props;

    return (
      <div id="discover-modal"
        className={"nav-modal-container" + klass}
        onClick={toggleModal}
      >
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
