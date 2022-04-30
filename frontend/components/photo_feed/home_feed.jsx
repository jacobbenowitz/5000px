import React from "react";
import PhotosIndexContainer from "../photos/photos_index_container";
import PhotosIndex from "../photos/photos_index";

export default class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPhotos();
  }

  // todo: create shared title component 
  // todo: create tab navigation component for discover
  render() {
    // { DiscoverPageHeader }
    // { DiscoverNavLinks }
    return (
      <PhotosIndex
        photos={this.props.photos}
        users={this.props.users}
        profiles={this.props.profiles}
        currentUser={this.props.currentUser}
      />
    )
  }
}