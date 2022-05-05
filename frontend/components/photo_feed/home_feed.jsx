import React from "react";
import PhotosIndexContainer from "../photos/photos_index_container";
import PhotosIndex from "../photos/photos_index";
import ProfileRows from "../profile/show_page/profile_photo_gallery";
import Demo3 from "../galleries/grid-gallery";
import Demo4 from "../galleries/demo4.jsx";


export default class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      profiles: {},
      users: {},
      currentProfile: null,
    }
  }

  componentDidMount() {
    const { photos, users, profiles, currentProfile } = this.props;
    debugger
    photos && profiles ? (
      this.setState({
        photos: photos,
        users: users,
        profiles: profiles,
        currentProfile: currentProfile,
      })) : (
        this.props.fetchPhotos()
        .then(() => this.props.fetchProfiles()
          .then(() => this.props.fetchUsers()
            .then(() => { this.setState({
            photos: photos,
            users: users,
            profiles: profiles,
            currentProfile: currentProfile,
          })
        })
      )))
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
          <ProfileRows id="discover-gal" photos={photos} />
        </div>

        <div className="home-feed-gallery" >
          <Demo4  />
          {/* <Demo3 photos={photos} /> */}
        </div>

        {/* <div> */}
          {/* <PhotosIndex
            photos={photos}
            users={users}
            profiles={profiles}
            currentUser={currentProfile} /> */}
        {/* </div> */}
      </div>
    )
  }
}