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
      allPhotos: {},
      pageTitle: '',
      pageDescription: '',
      page: '',
    }
  }

  componentDidMount() {
    const { fetchUsers, fetchPhotos, fetchProfiles, page } = this.props;
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

    this.setState({
      status: BUSY,
      pageTitle: title,
      pageDescription: description,
      page: page,
    }, () => {
      fetchProfiles()
      fetchPhotos()
    })
  }

  componentDidUpdate() {
    const { allPhotos, allProfiles, page } = this.props;
    const { pageTitle, status } = this.state;

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

    if (status === BUSY && Object.values(allPhotos) > 0 && allProfiles) {
      // todo: filter by discover page type
      this.setState({
        status: DONE,
        allPhotos: Object.values(allPhotos),
        allProfiles: allProfiles
      })
    }
    if (page !== this.state.page) {
      this.setState({
        pageTitle: title,
        pageDescription: description,
        page: page,
      })
    }
  }

  render() {
    const { pageTitle, pageDescription, status, allPhotos } = this.state;
    let feedHeader, gallery;

    feedHeader = (
      <FeedHeader
        title={pageTitle}
        description={pageDescription}
      />
    )
    // if (status === DONE) {
      // gallery = (
      //   <DiscoverRows photos={allPhotos} />
      // )
    // } 
    // debugger
    return (
      <div className="home-feed-container">
        {feedHeader}
        
        <DiscoverNav />
        <div className="home-feed-gallery">
          {this.props.allPhotos.length ? (
            <DiscoverRows photos={this.props.allPhotos} />
          ) : (
            <GridLoader />
          )
          }
        </div>
      </div>
    )
  }
}