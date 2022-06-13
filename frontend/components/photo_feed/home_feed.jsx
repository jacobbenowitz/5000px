import React from "react";
import PhotosIndexContainer from "../photos/photos_index_container";
import PhotosIndex from "../photos/photos_index";
import DiscoverGallery from "../galleries/discover_gallery";
import { buildGridGalleryProps, divideArrayIntoGroups, selectCollectionPhotos, selectFeaturedPhotographers, selectPhotosByIds, selectThreeRandomPhotos } from "../../reducers/selectors";
import GridLoader from "../galleries/gallery_grid_loader";
import DiscoverRows from "./discover_photo_gallery"
import FeaturedPhotographerCard from "./cards/featured_photographer_card";
import InfoCallout from "./cards/info_callout";
import CollectionGridCard from "./cards/collection_grid_card";
import SinglePhotoLarge from "./cards/single_photo_large";
import FeedHeader from "./headers/feed_header";
import FeaturedCardsLoader from '../galleries/featured_cards_loader'
import merge from 'lodash'

const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'
const COLLECTIONS = [
  'abstract',
  'chocolate',
  'minimalism',
  'music',
  'animals',
  'sports'
]

export default class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: IDLE,
      featuredStatus: IDLE,
      collectionStatus: IDLE,
      fetchedPhotos: [],
      newPhotos: [],
      featuredPhotographers: [],
      featuredCollections: {},
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
    const { fetchUsers, fetchPhotos, fetchProfiles, getLikes,
      photoIds, allPhotos, profiles } = this.props;
    
    this.lazyScrollListener()
    window.scrollTo(0, 0)

    this.setState({
      status: BUSY
    }, () => {
      fetchUsers()
      fetchProfiles()
      fetchPhotos()
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleLazyLoad)
    this.setState({ status: IDLE })
  }

  componentDidUpdate() {
    const { photoIds, allPhotos, users, profiles, fetchPhoto, photosStatus, profilesStatus } = this.props;
    const { featuredStatus, collectionStatus, featuredPhotographers, status, fetchedPhotos, featuredCollections } = this.state;

    if (featuredStatus === IDLE && collectionStatus === IDLE && photosStatus === DONE && profilesStatus === DONE) {
      // setState to BUSY in order to prevent multiple calls while updating
      this.setState({
        featuredStatus: BUSY,
        collectionStatus: BUSY
      })
      // featured Collections
      let finalCollections = {};
      COLLECTIONS.forEach(collection => {
        let collectionFetches = [];
        let formattedCollection = selectCollectionPhotos(profiles, collection)
        formattedCollection.photos.forEach(photoId =>
          collectionFetches.push(fetchPhoto(photoId))
        )
        Promise.all(collectionFetches).then((res) => {
          let collectionPhotos = res.map(action => action.photo.photo)
          formattedCollection.photos = collectionPhotos
        })
        finalCollections[collection] = formattedCollection
      })


      // featured Photographers
      let featured = selectFeaturedPhotographers(profiles, users)
      let fetches = []
      // build array of promises (each fetching one photo)
      featured.photoIds.forEach(id => fetches.push(fetchPhoto(id)))
      Promise.all(fetches).then(() => {
        this.setState({
          status: DONE,
          featuredStatus: DONE,
          collectionStatus: DONE,
          featuredPhotographers: featured.profiles,
          featuredCollections: finalCollections
        })
      })
    }
  }

  // fetchCollectionPhotos(collection) {
  //   const { fetchPhoto } = this.props;
  //   const { collections } = this.state;
  //   let fetches = [];
  //   let collectionsDup = merge({}, collections)

  //   collection.photos.forEach(photoId =>
  //     fetches.push(fetchPhoto(photoId)))
    
  //   Promise.all(fetches).then((res) => {
  //     let fetchedPhotos = res.map(action => action.photo.photo)
  //     collection.photos = fetchedPhotos
    // })
      // collectionsDup[collection.key] = collection
      // debugger
      // this.setState({
      //   collectionStatus: DONE,
      //   collections: collectionsDup
      // })
  // }

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
    window.addEventListener('scroll', this.handleLazyLoad)
  }

  handleLazyLoad(e) {
    e.preventDefault()
    e.stopPropagation()
    // use ref to get actual DOM Element
    const lazyLoadEle = this.lazyLoadBox.current

    // do not fetch more photos if already fetching photos
    if (this.eleIsInViewport(lazyLoadEle) && this.state.status !== BUSY) {
      this.setState({ status: BUSY }, () => {
        // window.removeEventListener('scroll', (e) => this.handleLazyLoad(e))
        this.fetchTenMorePhotos()
      })
    }
  }

  fetchTenMorePhotos() {
    const { allPhotos, photoIds, fetchPhoto } = this.props;
    const { fetchedPhotos, status } = this.state;

    let filteredIds = photoIds.filter(id => !fetchedPhotos.includes(id))
    let suffledIds = filteredIds.sort(() => Math.random() - 0.5).slice(0, 10)
    // debugger
    let fetches = [];
    suffledIds.forEach(id => fetches.push(fetchPhoto(id)))
    Promise.all(fetches).then((res) => {
      let newPhotos = res.map(action => action.photo.photo)
      let updatedFetchedPhotos = fetchedPhotos.concat([newPhotos])
      this.setState({
        status: DONE,
        fetchedPhotos: updatedFetchedPhotos
      })
    })
  }

  closeInfoCallout(e) {
    e.preventDefault()
    this.setState({infoCallout: false})
  }

  render() {
    const { allPhotos, users, profiles, currentProfile, photosStatus } = this.props;
    const { featuredPhotographers, collections, featuredStatus,
      status, collectionStatus, infoCallout, fetchedPhotos, newPhotos,
      featuredCollections } = this.state;

    let featuredCards, minimalismCard, singlePhotoCard, homeGallery, newGallery, lazyBox, loadingGrid, collectionComponents;

    if (fetchedPhotos.length && collectionStatus === DONE) {
      // debugger
      homeGallery = fetchedPhotos.map((photos, i) => 
        <React.Fragment key={`fragment-wrapper-${i}`}>
          {i < 7 ? i % 2 === 0 ? (
            <div className="grid-gallery-wrapper"
              key={`collection-wrapper-${i}`}>
              <CollectionGridCard
                key={`collection-card-${i}`}
                photos={Object.values(featuredCollections)[i]['photos'].slice(0, 3)}
                collection={Object.keys(featuredCollections)[i]}
                history={this.props.history}
              />
              <SinglePhotoLarge
                photo={Object.values(featuredCollections)[i]['photos'][3]}
                profile={Object.values(featuredCollections)[i].profile}
              />
            </div>
          ) : (
            <div className="grid-gallery-wrapper"
              key={`collection-wrapper-${i}`}>
              <SinglePhotoLarge
                photo={Object.values(featuredCollections)[i]['photos'][3]}
                profile={Object.values(featuredCollections)[i].profile}
              />
              <CollectionGridCard
                key={`collection-card-${i}`}
                photos={Object.values(featuredCollections)[i]['photos'].slice(0, 3)}
                collection={Object.keys(featuredCollections)[i]}
                history={this.props.history}
              />
            </div>
          ) : null}
          <DiscoverRows
            photos={photos}
            key={`home-gal-${i}`}
          />
        </React.Fragment>
      )
    }

    if (featuredStatus === DONE) {
      featuredCards = featuredPhotographers.map((photographer, i) => {
        return (
            <FeaturedPhotographerCard
              key={`ft-card-${i}`}
              allPhotos={allPhotos}
              featuredPhotographer={photographer}
            />
        )
      })
    } else {
      featuredCards = (
        <FeaturedCardsLoader />
      )
    }
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
      

    // if (collectionStatus === DONE) {
    //   collectionComponents = Object.keys(collections).map(key => 
    //     <CollectionGridCard 
    //       photos={this.fetchCollectionPhotos(collections[key])}
    //       collection={key}
    //       history={this.props.history}
    //     />
    //   )
    // }

      // singlePhotoCard = (

      // )

    if (status === BUSY) {
      loadingGrid = (
        <GridLoader />
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
          {homeGallery}
          {loadingGrid}
          <div id="lazy-load-box" ref={this.lazyLoadBox}>
          </div>
        </div>
      </div>
    )
  }
}