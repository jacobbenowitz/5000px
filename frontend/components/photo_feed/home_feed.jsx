import React from "react";
import PhotosIndexContainer from "../photos/photos_index_container";
import PhotosIndex from "../photos/photos_index";
import DiscoverGallery from "../galleries/discover_gallery";
import { buildGridGalleryProps, selectFeaturedPhotographers } from "../../reducers/selectors";
import GridLoader from "../galleries/gallery_grid_loader";
import DiscoverRows from "./discover_photo_gallery"
import FeaturedPhotographerCard from "./cards/featured_photographer_card";
import InfoCallout from "./cards/info_callout";

const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'

export default class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredPhotographers: [],
      status: IDLE,
      infoCallout: true
    }
    this.closeInfoCallout = this.closeInfoCallout.bind(this)
  }

  componentDidMount() {
    const { fetchUsers, fetchPhotos, fetchProfiles, getLikes } = this.props;

    this.setState({ status: BUSY }, () => {
      fetchUsers()
      fetchProfiles()
      fetchPhotos()
      // getLikes()
    })
  }

  componentDidUpdate() {
    const { allPhotos, photos, users, profiles } = this.props;
    const { featuredPhotographers, status } = this.state;

    if (status === BUSY && Object.values(allPhotos).length &&
      users && profiles) {
      this.setState({
        featuredPhotographers:
          selectFeaturedPhotographers(allPhotos, profiles, users),
        status: DONE
      })
    }
  }

  closeInfoCallout(e) {
    e.preventDefault()
    this.setState({infoCallout: false})
  }


  // todo: create shared title component 
  // todo: create tab navigation component for discover

  render() {
    const { photos, users, profiles, currentProfile } = this.props;
    const { featuredPhotographers, status, infoCallout } = this.state;

    let featuredCards;

    if (status === DONE) {
        featuredCards = featuredPhotographers.map((photographer, i) => {
        return (
          <FeaturedPhotographerCard
            key={`ft-card-${i}`}
            photos={photographer.photos}
            profile={photographer.profile}
          />
        )
      })
    }

    return (
      <div className="home-feed-container">
        <div className="page-top-banner">
          <h3>Home Feed</h3>
          <span className="sub-header-text">See photos and published Galleries from people you follow.</span>
        </div>

        <InfoCallout 
          infoCallout={infoCallout}
          closeInfoCallout={this.closeInfoCallout}
        />

        <div className="featured-section">
          <div className="featured-section-header">
            <span className="featured-header">
              Featured photographers
            </span>
            <span className="sub-header featured">
              Follow to explore new work
            </span>
          </div>
          <div className="featured-cards-wrapper">
            <div className="ft-scroll">
              <div className="spacer-52px" />
              {featuredCards}
              <div className="spacer-52px" />
            </div>
          </div>
          <div className="ft-divider" />
        </div>
        <div className="home-feed-gallery" >
          <div className="grid-gallery-wrapper">
            <div className="ft-grid-wrapper">
              <div className="featured-grid-container">
                <div className="ft-grid-top-label">
                  <span className="ft-label">
                    Minimalism | Collection
                  </span>
                </div>
                <div className="ft-grid-img-wrapper ft-large ft-top">

                </div>
                <div className="ft-grid-img-wrapper ft-small">
                  
                </div>
                <div className="ft-grid-img-wrapper">

                </div>
              </div>
            </div>
          </div>

          {photos ? (
            <DiscoverRows photos={photos} />
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