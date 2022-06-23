import React from 'react'
import DiscoverNav from './headers/discover_nav'
import FeedHeader from './headers/feed_header'
import discoverTitles from '../../util/discover_titles'
import DiscoverRows from './discover_photo_gallery'
import GridLoader from '../galleries/gallery_grid_loader'
import DiscoverHeaderLoader from './content_loaders/discover_header_placeholder'
import { sortByRecent } from '../../reducers/selectors'

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
    this.mounted = false;
    this.getTitleAndDescription = this.getTitleAndDescription.bind(this)
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount() {
    const { fetchUsers, fetchPhotos, fetchProfiles, page } = this.props;
    this.mounted = true;
    window.scrollTo(0, 0)
    fetchProfiles()
    fetchPhotos()
  }

  componentDidUpdate() {
    const { photosStatus, page, fetchPhoto } = this.props;
    const { status } = this.state;

    if (page !== this.state.page && status !== BUSY && photosStatus === DONE) {
      window.scrollTo(0, 0)
      this.setState({status: BUSY})
      let pageCopy = this.getTitleAndDescription(page)
      let photoIds = this.getPagePhotoIds(page)
      let ordered;
      let photos = [];
      let fetches = [];
      photoIds.forEach(photoId =>
        fetches.push(fetchPhoto(photoId)));

      Promise.all(fetches).then(res => {
        if (!this.mounted) return;
        
        photos = res.map(action => action.photo.photo)
        ordered = sortByRecent(photos)
        this.setState({
          status: DONE,
          pageTitle: pageCopy.title,
          pageDescription: pageCopy.description,
          page: page,
          pagePhotos: ordered
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
    let gallery, discoverHeader;
    if (status === DONE) {
      gallery = (
        <DiscoverRows photos={ pagePhotos }
        />
      )
      discoverHeader = (
        <FeedHeader
          title={pageTitle}
          description={pageDescription}
        />
      )
    } else {
      discoverHeader = (
        <div className="page-top-banner">
          <DiscoverHeaderLoader />
        </div>
      )
      gallery = <GridLoader />
    }

    return (
      <div className="home-feed-container">
        { discoverHeader }
        <DiscoverNav />
        <div className="home-feed-gallery">
          {gallery}
        </div>
      </div>
    )
  }
}