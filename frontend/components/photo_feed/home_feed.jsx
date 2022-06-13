import React from "react";
import PhotosIndexContainer from "../photos/photos_index_container";
import PhotosIndex from "../photos/photos_index";
import DiscoverGallery from "../galleries/discover_gallery";
import { buildGridGalleryProps, divideArrayIntoGroups, selectCollectionPhotos, selectFeaturedPhotographers } from "../../reducers/selectors";
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
      newPhotos: [],
      featuredPhotographers: [],
      minimalismCollection: [],
      infoCallout: true,
    }
    this.bindHandlers()
  }
  
  bindHandlers() {
    this.lazyLoadBox = React.createRef()
    this.homeSpacer = React.createRef()
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
    // if (status === DONE && fetchedPhotos.length < Object.values(allPhotos).length) {
    //   debugger
    //   this.setState({
    //     fetchedPhotos: Object.values(allPhotos)
    //   })
    // }
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
    // const controller = new AbortController()
    // const signal = controller.signal
    // const timeoutId = setTimeout(() => controller.abort(), 5000)

    // if (this.state.status === BUSY) {
    //   document.removeEventListener('scroll', lazyLoad)
    // } else document.addEventListener('scroll', lazyLoad)
    window.addEventListener('scroll', (e) => this.handleLazyLoad(e))
  }

  handleLazyLoad(e) {
    e.preventDefault()
    e.stopPropagation()
    // use ref to get actual DOM Element
    const lazyLoadEle = this.lazyLoadBox.current

    // do not fetch more photos if already fetching photos
    if (this.eleIsInViewport(lazyLoadEle) && this.state.status !== BUSY) {
      this.setState({ status: BUSY }, () => {
        window.removeEventListener('scroll', (e) => this.handleLazyLoad(e))
        this.fetchTenMorePhotos()
      })
    }
  }

  fetchTenMorePhotos() {
    const { photoIds, fetchPhoto } = this.props;
    const { fetchedPhotos, status } = this.state;

    debugger
    let filtered = photoIds.filter(id => !fetchedPhotos.includes(id))
    let suffled = filtered.sort(() => Math.random() - 0.5)
    let photos = [];
    for (let i = 0; i < 10; i++) {
      const photoId = suffled[i];
      fetchPhoto(photoId).then(res => photos.push(res.photo.photo))
    }
    setTimeout(() => {
      this.setState({
        fetchedPhotos: fetchedPhotos.concat([photos])
      })
    }, 0)

    setTimeout(() => {
      this.setState({ status: DONE })
    }, 3000)
  }

  // cannot add React components to DOM with insertBefore 
  // addNewGallery() { 
  //   // refactor to find last gallery on page and append after that
  //   // let spacer = this.homeSpacer.current
  //   let spacer = document.getElementById('home-spacer')
  //   let parent = spacer.parentNode
  //   let newGallery = (
  //     <DiscoverRows
  //       photos={this.state.newPhotos}
  //       key={`home-gal-new`}
  //     />
  //   )
  //   parent.insertBefore(newGallery, spacer)
  // }

  closeInfoCallout(e) {
    e.preventDefault()
    this.setState({infoCallout: false})
  }

  render() {
    const { allPhotos, users, profiles, currentProfile } = this.props;
    const { featuredPhotographers, minimalismCollection,
      status, infoCallout, fetchedPhotos, newPhotos } = this.state;

    let featuredCards, minimalismCard, singlePhotoCard, homeGallery, newGallery, lazyBox;

    if (fetchedPhotos.length) {
      homeGallery = fetchedPhotos.map((photos, i) => 
        <DiscoverRows
          photos={photos} 
          key={`home-gal-${i}`}
        />
      )
    }

    if (status === DONE) {
      // get groups of 10 photos using selector
      // no good, does not keep order
      // let photoGroups = divideArrayIntoGroups(fetchedPhotos, 10)
      
      // for every group of ten, add a new discoverRow
      // homeGallery = photoGroups.map((photos, i) =>
      // )
      
      // lazyBox = (
      //   <div id="lazy-load-box"
      //     ref={this.lazyLoadBox}
      //   ></div>
      // )
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

          {homeGallery}

          {/* {lazyBox} */}
          <div id="lazy-load-box"
            ref={this.lazyLoadBox}
          ></div>
        </div>
      </div>
    )
  }
}