import React from "react";
import PhotosIndexContainer from "../photos/photos_index_container";
import PhotosIndex from "../photos/photos_index";

export default class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPhotos();
    this.props.fetchProfiles();
    this.props.fetchUsers();
  }

  // todo: create shared title component 
  // todo: create tab navigation component for discover
  render() {
    const { photos, users, profiles, currentProfile } = this.props
    debugger
    return (
      <div className="home-feed-container">
        {/* DiscoverPageHeader */}
        {/* DiscoverNavLinks */}
        <PhotosIndex
          photos={photos}
          users={users}
          profiles={profiles}
          currentUser={currentProfile} />
      </div>
    )
  }
}