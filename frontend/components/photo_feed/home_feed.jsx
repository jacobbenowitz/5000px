import React from "react";
import PhotosIndexContainer from "../photos/photos_index_container";
import PhotosIndex from "../photos/photos_index";
import DiscoverGallery from "../galleries/discover_gallery";
import { buildGridGalleryProps } from "../../reducers/selectors";
import GridLoader from "../galleries/gallery_grid_loader";
import DiscoverRows from "./discover_photo_gallery"

export default class HomeFeed extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { photos, profiles, likes,
      fetchPhotos, fetchProfiles, getLikes } = this.props;
    
    fetchPhotos()
    fetchProfiles()
    getLikes()
  }
  

  // todo: create shared title component 
  // todo: create tab navigation component for discover
  render() {
    const { photos, users, profiles, currentProfile } = this.props;
    
    return (
      <div className="home-feed-container">
      <div className="page-top-banner">
        <span>Discover</span>
      </div>
        {/* <DiscoverGallery images={ photos }/> */}
      <div className="home-feed-gallery" >
        { photos ? (
            <DiscoverRows photos={photos}/>
            ) : (
              <GridLoader />
              )
            }
      </div>
        <div>
          {/* <PhotosIndex
            photos={photos}
            users={users}
            profiles={profiles}
            currentUser={currentProfile}
          /> */}
        </div>
      </div>
    )
  }
}