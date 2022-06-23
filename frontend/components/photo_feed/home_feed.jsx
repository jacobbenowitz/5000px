import React from "react";
import {
  selectCollectionPhotos,
  selectFeaturedPhotographers,
  selectFollowersPhotoIds,
  sortByRecent
} from "../../reducers/selectors";
import GridLoader from "../galleries/gallery_grid_loader";
import DiscoverRows from "./discover_photo_gallery"
import FeaturedPhotographerCard from "./cards/featured_photographer_card";
import InfoCallout from "./cards/info_callout";
import CollectionGridCard from "./cards/collection_grid_card";
import SinglePhotoLarge from "./cards/single_photo_large";
import FeedHeader from "./headers/feed_header";
import FeaturedCardsLoader from '../galleries/featured_cards_loader'
import { throttle } from "../../util/throttle_util";

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
      noMorePhotos: false,
    }
    this.mounted = false
    this.bindHandlers()
  }

  bindHandlers() {
    this.lazyLoadBox = React.createRef()
    this.homeSpacer = React.createRef()
    this.closeInfoCallout = this.closeInfoCallout.bind(this)
    this.eleIsInViewport = this.eleIsInViewport.bind(this)
    this.fetchTenMorePhotos = this.fetchTenMorePhotos.bind(this)
    this.addLazyScrollListener = this.addLazyScrollListener.bind(this)
    this.removeLazyScrollListener = this.removeLazyScrollListener.bind(this)
    this.handleLazyLoad = this.handleLazyLoad.bind(this)
  }

  componentWillUnmount() {
    this.removeLazyScrollListener()
    this.mounted = false;
  }

  componentDidMount() {
    const { fetchUsers, fetchPhotos, fetchProfiles, getFollows } = this.props;

    window.scrollTo(0, 0)
    this.addLazyScrollListener()

    this.mounted = true;
    this.setState({
      status: BUSY,
    }, () => {
      fetchUsers()
      fetchProfiles()
      getFollows()
      fetchPhotos()
    })
  }

  componentDidUpdate() {
    const { photoIds, allFollows, allPhotos, allProfiles, users, profiles, fetchPhoto, photosStatus, profilesStatus, currentProfile } = this.props;
    const { featuredStatus, collectionStatus, featuredPhotographers, status, fetchedPhotos, featuredCollections } = this.state;


    if (!!currentProfile && featuredStatus === IDLE && collectionStatus === IDLE && photosStatus === DONE && profilesStatus === DONE && !!Object.values(allFollows).length && this.mounted) {
      // setState to BUSY in order to prevent multiple calls while updating
      this.setState({
        featuredStatus: BUSY,
        collectionStatus: BUSY
      })

      // current user's following photo ids
      let followingPhotoIds = selectFollowersPhotoIds(currentProfile.following, allFollows, allProfiles)
      

      // featured Collections
      let finalCollections = {};

      COLLECTIONS.forEach(collection => {
        let collectionFetches = [];
        let formattedCollection = selectCollectionPhotos(profiles, collection)
        formattedCollection.photos.forEach(photoId =>
          collectionFetches.push(fetchPhoto(photoId))
        )
        Promise.all(collectionFetches).then((res) => {
          if (!this.mounted) return;

          let collectionPhotos = res.map(action => action.photo.photo)
          formattedCollection.photos = collectionPhotos
        })
        finalCollections[collection] = formattedCollection
      })

      // featured Photographers
      let featured = selectFeaturedPhotographers(profiles, users)
      let fetches = []
      // build array of promises (each fetching one photo)
      featured.photoIds.forEach(id => {
        fetches.push(fetchPhoto(id))
      })

      Promise.all(fetches).then(() => {
        if (!this.mounted) return;

        this.setState({
          status: DONE,
          featuredStatus: DONE,
          collectionStatus: DONE,
          featuredPhotographers: featured.profiles,
          featuredCollections: finalCollections,
          followingPhotoIds: followingPhotoIds
        })
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

  addLazyScrollListener() {
    window.addEventListener('scroll', e => {
      const lazyLoadEle = this.lazyLoadBox.current
      this.handleLazyLoad(e, lazyLoadEle)
    })
  }

  removeLazyScrollListener() {
    window.removeEventListener('scroll', e => {
      const lazyLoadEle = this.lazyLoadBox.current
      this.handleLazyLoad(e, lazyLoadEle)
    })
  }

  handleLazyLoad = throttle((e, lazyLoadEle) => {
    e.preventDefault()
    e.stopPropagation()
    const { status } = this.state;

    // do not fetch more photos if already fetching photos
    if (lazyLoadEle !== null &&
      status !== BUSY && this.eleIsInViewport(lazyLoadEle)) {
      this.setState({ status: BUSY }, () => {
        this.fetchTenMorePhotos()
      })
    }
  })

  fetchTenMorePhotos() {
    const { allPhotos, photoIds, fetchPhoto, currentProfile } = this.props;
    const { fetchedPhotos, status, followingPhotoIds } = this.state;
    
    let shuffledIds = [];
    let userPhotoIds = [];
    let filteredFollowingIds = [];
    let tenShuffledPhotos = [];

    // map fetched photos into flattened array of ids
    let fetchedIds = fetchedPhotos.map(array => array.map(photo =>
      parseInt(photo.id))).flat()

    // filter out previously fetched photos
    let unfetchedPhotos = photoIds.filter(id =>
      !fetchedIds.includes(id)
    )
    // if the currentUser has posted photos, show < 3 of them 
    if (currentProfile.photoIds) {
      userPhotoIds = currentProfile.photoIds
        .sort((a, b) => a - b)
        .filter(id => unfetchedPhotos.includes(id))
        .slice(0, 3)
    }
    // if we have followingPhotoIds, fetch 10 of those + user's photos
    if (followingPhotoIds?.length > 0) {
      filteredFollowingIds = followingPhotoIds
        .filter(id => unfetchedPhotos.includes(id))
        .sort(() => Math.random() - 0.5)
        .slice(0, 10)
    }
    // check if we've fetched all follower's photos and/or all of our photos
    if (filteredFollowingIds.length === 0 || userPhotoIds.length === 0) {
      tenShuffledPhotos = unfetchedPhotos
        .sort(() => Math.random() - 0.5)
        .slice(0, 10)

      shuffledIds = [
        ...userPhotoIds,
        ...filteredFollowingIds,
        ...tenShuffledPhotos
      ]
    } else {
      shuffledIds = [
        ...userPhotoIds,
        ...filteredFollowingIds
      ]
    }
    if (shuffledIds.length === 0) {
      this.setState({ noMorePhotos: true })
      this.removeLazyScrollListener()
      return
    } else {
      // store all photoIds to fetch
      let fetches = [];
      shuffledIds.forEach(id => fetches.push(fetchPhoto(id)))
      Promise.all(fetches).then((res) => {
        if (!this.mounted) return

        let newPhotos = res.map(action => action.photo.photo)
        let updatedFetchedPhotos = fetchedPhotos.concat([newPhotos])
        this.setState({
          status: DONE,
          fetchedPhotos: updatedFetchedPhotos
        })
      })
    }
  }

  closeInfoCallout(e) {
    e.preventDefault()
    this.setState({ infoCallout: false })
  }

  render() {
    const { allPhotos, currentProfile, allFollows,
      createFollow, removeFollow } = this.props;

    const { featuredPhotographers, collections, featuredStatus,
      status, collectionStatus, infoCallout, fetchedPhotos, newPhotos,
      featuredCollections, noMorePhotos } = this.state;

    let featuredCards, homeGallery, loadingGrid, followedGallery, lazyLoadBox;

    if (collectionStatus === DONE) {
      homeGallery = fetchedPhotos.map((photos, i) =>
        <React.Fragment key={`fragment-wrapper-${i}`}>
          {i < 6 ? i % 2 === 0 ? (
            <div className="grid-gallery-wrapper"
              key={`collection-wrapper-${i}`}>
              <CollectionGridCard
                key={`collection-card-${i}`}
                photos={Object.values(featuredCollections)[i].photos.slice(0, 3)}
                collection={Object.keys(featuredCollections)[i]}
                history={this.props.history}
              />
              <SinglePhotoLarge
                photo={Object.values(featuredCollections)[i].photos[3]}
                profile={Object.values(featuredCollections)[i].profile}
              />
            </div>
          ) : (
            <div className="grid-gallery-wrapper"
              key={`collection-wrapper-${i}`}>
              <SinglePhotoLarge
                photo={Object.values(featuredCollections)[i].photos[3]}
                profile={Object.values(featuredCollections)[i].profile}
              />
              <CollectionGridCard
                key={`collection-card-${i}`}
                photos={Object.values(featuredCollections)[i].photos.slice(0, 3)}
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
            currentProfile={currentProfile}
            allFollows={allFollows}
            createFollow={createFollow}
            removeFollow={removeFollow}
          />
        )
      })
    } else {
      featuredCards = (
        <FeaturedCardsLoader />
      )
    }

    if (status === BUSY && !noMorePhotos) {
      loadingGrid = (
        <GridLoader />
      )
    }

    if (!noMorePhotos) {
      lazyLoadBox = (
        <div
          id="lazy-load-box"
          ref={this.lazyLoadBox}
        />
      )
    } else {
      lazyLoadBox = (
        <div className="no-photos-uploaded">
          <h5>No more photos 😞</h5>
        </div>
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
          {lazyLoadBox}
        </div>
      </div>
    )
  }
}