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
    }
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

  componentDidMount() {
    const { fetchUsers, fetchPhotos, fetchProfiles, getFollows } = this.props;
    this.mounted = true;
    window.scrollTo(0, 0)
    this.addLazyScrollListener()

    this.setState({
      status: BUSY
    }, () => {
      fetchUsers()
      fetchProfiles()
      fetchPhotos()
      getFollows()
    })
  }

  componentWillUnmount() {
    this.removeLazyScrollListener()
    this.setState({
      status: IDLE,
      featuredStatus: IDLE,
      collectionStatus: IDLE,
    })
    this.mounted = false;
  }

  componentDidUpdate() {
    const { photoIds, allFollows, allPhotos, allProfiles, users, profiles, fetchPhoto, photosStatus, profilesStatus, currentProfile } = this.props;
    const { featuredStatus, collectionStatus, featuredPhotographers, status, fetchedPhotos, featuredCollections } = this.state;

    if (!!currentProfile && featuredStatus === IDLE && collectionStatus === IDLE && photosStatus === DONE && profilesStatus === DONE && !!Object.values(allFollows).length) {
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

    // do not fetch more photos if already fetching photos
    if (lazyLoadEle !== null && this.eleIsInViewport(lazyLoadEle) && this.state.status !== BUSY) {
      this.setState({ status: BUSY }, () => {
        // window.removeEventListener('scroll', (e) => this.handleLazyLoad(e))
        this.fetchTenMorePhotos()
      })
    }
  })

  fetchTenMorePhotos() {
    const { allPhotos, photoIds, fetchPhoto, currentProfile } = this.props;
    const { fetchedPhotos, status, followingPhotoIds } = this.state;
    let shuffledIds, userPhotoIds;

    // filter out previously fetched photos
    let unfetchedPhotos = photoIds.filter(id => !fetchedPhotos.includes(id))
    // if the currentUser has posted photos, show < 3 of them 
    if (currentProfile.photoIds) {
      userPhotoIds = currentProfile.photoIds
        .sort((a, b) => a - b)
        .slice(0, 3)
    }
    // if we have followingPhotoIds, fetch those photos first
    if (followingPhotoIds?.length > 0) {
      shuffledIds = userPhotoIds.concat(followingPhotoIds.sort(() => Math.random() - 0.5).slice(0, 10)).flat()
    } else {
      // else, fetch shuffled photos from all photos [photoIds]
      shuffledIds = userPhotoIds.concat(unfetchedPhotos.sort(() => Math.random() - 0.5).slice(0, 10)).flat()
    }

    let fetches = [];
    shuffledIds.forEach(id => fetches.push(fetchPhoto(id)))

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
    this.setState({ infoCallout: false })
  }

  render() {
    const { allPhotos, currentProfile, allFollows,
      createFollow, removeFollow } = this.props;
    const { featuredPhotographers, collections, featuredStatus,
      status, collectionStatus, infoCallout, fetchedPhotos, newPhotos,
      featuredCollections } = this.state;

    let featuredCards, homeGallery, loadingGrid, followedGallery;

    if (collectionStatus === DONE) {
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