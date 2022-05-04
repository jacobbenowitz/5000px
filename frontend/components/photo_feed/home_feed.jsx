import React from "react";
import PhotosIndexContainer from "../photos/photos_index_container";
import PhotosIndex from "../photos/photos_index";
import ProfileRows from "../profile/show_page/profile_photo_gallery";

export default class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      galleryPhotos: [],
      profiles: {},
      users: {},
      currentProfile: null,
    }
  }
  componentDidMount() {
    // this.props.fetchPhotos();
    // this.props.fetchProfiles();
    // this.props.fetchUsers();
    const { photos, users, profiles, currentProfile } = this.props;
    this.setState({
      photos: photos,
      users: users,
      profiles: profiles,
      currentProfile: currentProfile,
    })
  }

  // todo: create shared title component 
  // todo: create tab navigation component for discover
  render() {
    const { photos, users, profiles, currentProfile } = this.state;
    debugger
    return (
      <div className="home-feed-container">
      <div className="page-top-banner">
        <span>Discover</span>
      </div>
        {/* DiscoverPageHeader */}
        {/* DiscoverNavLinks */}
        {/* test */}
        <div className="home-feed-gallery">
          <ProfileRows photos={photos} />
        </div>
        <PhotosIndex
          photos={photos}
          users={users}
          profiles={profiles}
          currentUser={currentProfile} />
      </div>
    )
  }
}