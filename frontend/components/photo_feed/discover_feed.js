import React from 'react'
import DiscoverNav from './headers/discover_nav'
import FeedHeader from './headers/feed_header'
import discoverTitles from '../../util/discover_titles'
import DiscoverRows from './discover_photo_gallery'
import GridLoader from '../galleries/gallery_grid_loader'

const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'


export default class DiscoverFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: IDLE,
      pagePhotos: [],
      pageTitle: '',
      pageDescription: '',
      page: '',
    }
    this.getTitleAndDescription = this.getTitleAndDescription.bind(this)
  }

  componentDidMount() {
    const { fetchUsers, fetchPhotos, fetchProfiles, page } = this.props;
    window.scrollTo(0, 0)

    // let pageCopy = this.getTitleAndDescription(page)

    // this.setState({
    //   pageTitle: pageCopy.title,
    //   pageDescription: pageCopy.description,
    //   page: page,
    // }, () => {
      fetchProfiles()
      fetchPhotos()
    // })
  }

  componentDidUpdate() {
    const { photosStatus, profilesStatus, allPhotos,
      allProfiles, page, fetchPhoto } = this.props;
    const { status } = this.state;

    if (page !== this.state.page && status !== BUSY && photosStatus === DONE) {
      this.setState({status: BUSY})
      let pageCopy = this.getTitleAndDescription(page)
      let photoIds = this.getPagePhotoIds(page)
      let photos = [];
      let fetches = [];

      photoIds.forEach(photoId =>
        fetches.push(fetchPhoto(photoId)));

      Promise.all(fetches).then(res => {
        photos = res.map(action => action.photo.photo)
        this.setState({
          status: DONE,
          pageTitle: pageCopy.title,
          pageDescription: pageCopy.description,
          page: page,
          pagePhotos: photos
        })
      });
    }
  }

  getPagePhotoIds(page) {
    const { popularPhotos, freshPhotos,
      upcomingPhotos, editorsPhotos } = this.props;

    return page === 'popular' ? popularPhotos :
      page === 'editors' ? editorsPhotos :
      page === 'upcoming' ? upcomingPhotos :
      freshPhotos
  }

  getTitleAndDescription(page) {
    let title, description;

    if (page === 'popular') {
      title = discoverTitles.popular.title
      description = discoverTitles.popular.description
    } else if (page === 'upcoming') {
      title = discoverTitles.upcoming.title
      description = discoverTitles.upcoming.description
    } else if (page === 'fresh') {
      title = discoverTitles.fresh.title
      description = discoverTitles.fresh.description
    } else if (page === 'editors') {
      title = discoverTitles.editors.title
      description = discoverTitles.editors.description
    }
    return {title: title, description: description}
  }

  render() {
    const { pageTitle, pageDescription, status, pagePhotos } = this.state;
    let gallery;
    // debugger
    if (status === DONE) {
      gallery = (
        <DiscoverRows photos={ pagePhotos }
        />
      )
    } else {
      gallery = <GridLoader />
    }

    return (
      <div className="home-feed-container">
        <FeedHeader
          title={pageTitle}
          description={pageDescription}
        />
        
        <DiscoverNav />
        <div className="home-feed-gallery">
          {gallery}
        </div>
      </div>
    )
  }
}