import React from "react";
import PhotosIndexContainer from "../photos/photos_index_container";
import PhotosIndex from "../photos/photos_index";
import DiscoverGallery from "../galleries/discover_gallery";
import { buildGridGalleryProps, selectCollectionPhotos, selectFeaturedPhotographers } from "../../reducers/selectors";
import GridLoader from "../galleries/gallery_grid_loader";
import DiscoverRows from "./discover_photo_gallery"
import FeaturedPhotographerCard from "./cards/featured_photographer_card";
import InfoCallout from "./cards/info_callout";
import CollectionGridCard from "./cards/collection_grid_card";
import SinglePhotoLarge from "./cards/single_photo_large";
import FeedHeader from "./headers/feed_header";

const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'

export default class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredPhotographers: [],
      status: IDLE,
      infoCallout: true,
      minimalismCollection: []
    }
    this.closeInfoCallout = this.closeInfoCallout.bind(this)
  }

  componentDidMount() {
    const { fetchUsers, fetchPhotos, fetchProfiles, getLikes } = this.props;
    window.scrollTo(0, 0)
    this.setState({ status: BUSY }, () => {
      fetchUsers()
      fetchProfiles()
      fetchPhotos()
    })
  }

  componentWillUnmount() {
    this.setState({ status: IDLE })
  }

  componentDidUpdate() {
    const { allPhotos, users, profiles } = this.props;
    const { featuredPhotographers, status } = this.state;
    if (status === BUSY && allPhotos && users && profiles) {
      let featuredPhotographers = selectFeaturedPhotographers(allPhotos, profiles, users)
      let minimalismCollection = selectCollectionPhotos(allPhotos, profiles, 'minimalism')
      this.setState({
        status: DONE,
        featuredPhotographers: featuredPhotographers,
        minimalismCollection: minimalismCollection,
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
    const {allPhotos, users, profiles, currentProfile } = this.props;
    const { featuredPhotographers, minimalismCollection,
      status, infoCallout } = this.state;

    let featuredCards, minimalismCard, singlePhotoCard, shuffledPhotos;

    if (status === DONE) {
      featuredCards = featuredPhotographers.map((photographer, i) => {
        return (
          <FeaturedPhotographerCard
            key={`ft-card-${i}`}
            photos={photographer.photos}
            profile={photographer.profile}
          />
        )
      });

      shuffledPhotos = Object.values(allPhotos).sort(() =>
        Math.random() - 0.5);
      
      minimalismCard = (
        <CollectionGridCard 
          photos={minimalismCollection.photos}
          collection={'minimalism'}
          history={this.props.history}
        />
      )

      singlePhotoCard = (
        <SinglePhotoLarge
          // temp testing
          photo={featuredPhotographers[0].photos[0]}
          profile={featuredPhotographers[0].profile}
        />
      )
      
    }

    return (
      <div className="home-feed-container">
        <FeedHeader
          title={'Home Feed'}
          description={'See photos and published Galleries from people you follow.'}
        />

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
        <div className="home-feed-gallery">
          <div className="grid-gallery-wrapper">
            {minimalismCard}
            {singlePhotoCard}
          </div>

          {shuffledPhotos ? (
            <DiscoverRows photos={shuffledPhotos} />
            ) : (
              <GridLoader />
            )
          }
        </div>
      </div>
    )
  }
}