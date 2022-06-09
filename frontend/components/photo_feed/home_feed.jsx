import React from "react";
import PhotosIndexContainer from "../photos/photos_index_container";
import PhotosIndex from "../photos/photos_index";
import DiscoverGallery from "../galleries/discover_gallery";
import { buildGridGalleryProps, selectFeaturedPhotographers } from "../../reducers/selectors";
import GridLoader from "../galleries/gallery_grid_loader";
import DiscoverRows from "./discover_photo_gallery"
import FeaturedPhotographerCard from "./cards/featured_photographer_card";

const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'

export default class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredPhotographers: [],
      status: IDLE
    }
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

    // console.log(allPhotos, users, profiles)
    if (status === BUSY && Object.values(allPhotos).length && users && profiles) {
      // const featuredPhotographers =
        
      this.setState({
        featuredPhotographers:
          selectFeaturedPhotographers(allPhotos, profiles, users),
        status: DONE
      })
    }
  }


  // todo: create shared title component 
  // todo: create tab navigation component for discover
  render() {
    const { photos, users, profiles, currentProfile } = this.props;
    const { featuredPhotographers, status } = this.state;

    let featuredCards;

    if (status === DONE) {
      // for (let i = 0; i < featuredPhotographers.length; i++) {
        //   const photo = array[i];
        // }
      debugger
        featuredCards = featuredPhotographers.map((photographer, i) => {
        // debugger
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
        <div className="home-callout-container">
          <div className="home-callout">
            <div className="content-wrapper flex-col">
              <div className="flex-col gap-10 call-text">
                <h3>Welcome to 5000px</h3>
                <div className="spacer-2rem;h"></div>
                <span>This is a fullstack clone of 500px, a popular photo sharing site for photographers.</span>
                <span>Developed by Jacob Benowitz</span>
              </div>
              <div className="flex-row callout-buttons">
                <a href="https://github.com/jacobbenowitz/"
                  target="_blank" rel="noreferrer"
                  className="icon-button"
                >
                  <i className="fa-brands fa-github fa-lg" />
                  GitHub
                </a>

                <a href="https://angel.co/u/jacob-benowitz"
                  target="_blank" rel="noreferrer"
                  className="icon-button"
                >
                  <i className="fa-brands fa-angellist fa-lg" />
                  AngelList
                </a>
              </div>
            </div>
          </div>
        </div>

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