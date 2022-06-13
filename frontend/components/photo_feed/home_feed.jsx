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
      status: IDLE,
      fetchedPhotos: [],
      featuredPhotographers: [],
      minimalismCollection: [],
      infoCallout: true,
    }
    this.bindHandlers()
  }
  
  bindHandlers() {
    this.lazyLoadBox = React.createRef()
    this.closeInfoCallout = this.closeInfoCallout.bind(this)
    this.eleIsInViewport = this.eleIsInViewport.bind(this)
    this.fetchTenMorePhotos = this.fetchTenMorePhotos.bind(this)
    this.lazyScrollListener = this.lazyScrollListener.bind(this)
    this.handleLazyLoad = this.handleLazyLoad.bind(this)
  }

  componentDidMount() {
    const { fetchUsers, fetchPhotos, fetchProfiles, getLikes } = this.props;
    window.scrollTo(0, 0)
    this.lazyScrollListener()
    this.setState({ status: BUSY }, () => {
      fetchUsers()
      fetchProfiles()
      fetchPhotos().then(() => 
        this.fetchTenMorePhotos()
      )
    })
  }

  componentWillUnmount() {
    this.setState({ status: IDLE })
  }

  componentDidUpdate() {
    const { photoIds, allPhotos, users, profiles, fetchPhoto } = this.props;
    const { featuredPhotographers, status, fetchedPhotos } = this.state;

    // if (status === BUSY && allPhotos && users && profiles) {
      // todo: build this in photos route
      // let featuredPhotographers = selectFeaturedPhotographers(allPhotos, profiles, users)
      // todo: all ready doing this in photos route
      // let minimalismCollection = selectCollectionPhotos(allPhotos, profiles, 'minimalism')
      // this.setState({
        // status: DONE,
        // featuredPhotographers: featuredPhotographers,
        // minimalismCollection: minimalismCollection,
      // })
    // }
    // delete if fetchTenMorePhotos callback in didMount works 
    // if (status !== BUSY && photoIds.length > 0 && fetchedPhotos.length < 10) {
    //   this.setState({ status: BUSY }, () =>
    //     this.fetchTenMorePhotos()
    //   )
    // }
    if (status === DONE && fetchedPhotos.length < Object.values(allPhotos).length) {
      this.setState({
        fetchedPhotos: Object.values(allPhotos)
      })
    }
  }

  eleIsInViewport(element) {
    const boundingRect = element.getBoundingClientRect();

    return (
      boundingRect.top >= 0 &&
      boundingRect.left >= 0 &&
      boundingRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      boundingRect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  lazyScrollListener() {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)

    document.addEventListener('scroll', () => this.handleLazyLoad(timeoutId))
  }

  handleLazyLoad(timeoutId) {
    const lazyLoadEle = this.lazyLoadBox.current // use ref to get actual DOM Element
    // do not fetch more photos if already fetching photos
    if (this.eleIsInViewport(lazyLoadEle) && this.state.status !== BUSY) {
      this.setState({ status: BUSY }, () =>
        this.fetchTenMorePhotos(timeoutId)
      )
    }
  }

  fetchTenMorePhotos(timeoutId) {
    const { photoIds, fetchPhoto } = this.props;
    const { fetchedPhotos, status } = this.state;

    // test removing scroll eventListener to avoid duplicate events
    document.removeEventListener('scroll', e => this.handleLazyLoad(e))
    debugger
    let suffled = photoIds.sort(() => Math.random() - 0.5)
    let filtered = suffled.filter(id => !fetchedPhotos.includes(id))
    for (let i = 0; i < 10; i++) {
      const photoId = filtered[i];
      fetchPhoto(photoId)
    }

    this.setState({ status: DONE }, () => {
      // reinstate eventListener after 3 seconds
      clearTimeout(timeoutId)
    })

    // fetch 10 more photos (unique and shuffled)
  }

  closeInfoCallout(e) {
    e.preventDefault()
    this.setState({infoCallout: false})
  }

  render() {
    const {allPhotos, users, profiles, currentProfile } = this.props;
    const { featuredPhotographers, minimalismCollection,
      status, infoCallout, fetchedPhotos } = this.state;

    let featuredCards, minimalismCard, singlePhotoCard;

    if (status === DONE) {
      // featuredCards = featuredPhotographers.map((photographer, i) => {
      //   return (
      //     <FeaturedPhotographerCard
      //       key={`ft-card-${i}`}
      //       photos={photographer.photos}
      //       profile={photographer.profile}
      //     />
      //   )
      // });

      
      // minimalismCard = (
      //   <CollectionGridCard 
      //     photos={minimalismCollection.photos}
      //     collection={'minimalism'}
      //     history={this.props.history}
      //   />
      // )

      // singlePhotoCard = (
      //   <SinglePhotoLarge
      //     // temp testing
      //     photo={featuredPhotographers[0].photos[0]}
      //     profile={featuredPhotographers[0].profile}
      //   />
      // )
      
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
          {/* <div className="featured-cards-wrapper">
            <div className="ft-scroll">
              <div className="spacer-52px" />
              {featuredCards}
              <div className="spacer-52px" />
            </div>
          </div> */}
          <div className="ft-divider" />
        </div>
        <div className="home-feed-gallery">
          <div className="grid-gallery-wrapper">
            {minimalismCard}
            {singlePhotoCard}
          </div>

          {fetchedPhotos ? (
            <DiscoverRows photos={fetchedPhotos} />
            ) : (
              <GridLoader />
            )
          }
          <div id="spacer" className={'spacer' + status === BUSY ? 'on' : 'off'}></div>
          <div id="lazy-load-box"
            ref={this.lazyLoadBox}
          ></div>

        </div>
      </div>
    )
  }
}