import React from "react";
import PhotosIndex from "../photos/photos_index";

export default class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchPhotos();
  }
  // todo: create shared title component 
  // todo: create tab navigation component for discover
  render() {
    // { DiscoverPageHeader }
    // { DiscoverNavLinks }
    
  }

}