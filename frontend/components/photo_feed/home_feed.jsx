import React from "react";
import PhotosIndexContainer from "../photos/photos_index_container";
import PhotosIndex from "../photos/photos_index";
import DiscoverGallery from "../galleries/discover_gallery";
import { buildGridGalleryProps, asArray } from "../../reducers/selectors";
import GridLoader from "../galleries/gallery_grid_loader";

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
        photos: buildGridGalleryProps(photos),
        users: users,
        profiles: profiles,
        currentProfile: currentProfile,
      })) : (
        this.props.fetchPhotos()
        .then(() => this.props.fetchProfiles()
          .then(() => this.props.getLikes()
            .then(() => { this.setState({
              photos: photos,
              users: users,
              profiles: profiles,
              likes: likes,
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
        {photos ? (
          <div className="home-feed-gallery" >
            <DiscoverGallery images={ photos }/>
          </div>

        ) : ( <GridLoader /> )
        }

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