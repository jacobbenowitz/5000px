import React from 'react';
import FeedHeader from './headers/feed_header'
import DiscoverRows from './discover_photo_gallery'
import GridLoader from '../galleries/gallery_grid_loader'
import { Link } from 'react-router-dom';
import likeIconLarge from '../../util/like_icon_lg';

const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'

export default class LikedPhotosFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: IDLE,
      pagePhotos: [],
    }
  }

  componentWillUnmount() {
    this.setState({ status: IDLE })
  }

  componentDidMount() {
    const { fetchPhotos, fetchProfiles, getLikes } = this.props;
    window.scrollTo(0, 0)
    fetchProfiles()
    fetchPhotos()
    getLikes()
  }

  componentDidUpdate() {
    const { currentProfile, photosStatus, profilesStatus, page, fetchPhoto } = this.props;
    const { status, pagePhotos } = this.state;

    if (status === IDLE && pagePhotos.length === 0 && photosStatus === DONE && profilesStatus === DONE) {
      this.setState({ status: BUSY })
      let photoIds = currentProfile.likedPhotos
      let photos = [];
      let fetches = [];
      photoIds.forEach(photoId =>
        fetches.push(fetchPhoto(photoId)));
      Promise.all(fetches).then(res => {
        photos = res.map(action => action.photo.photo)
        this.setState({
          status: DONE,
          pagePhotos: photos
        })
      });
    }
  }

  render() {
    const { status, pagePhotos } = this.state;
    let gallery;
    
    if (status === DONE) {
      if (pagePhotos.length > 0) {
        gallery = ( 
          <DiscoverRows
            photos={pagePhotos}
          />
        )
      } else {
        gallery = (
          <div className='liked-photos-empty-container'>
            <div className='no-likes-icon-container'>
              {likeIconLarge}
            </div>
            <h4 className='no-likes header'>
              You haven't liked any photos yet
            </h4>
            <p className='no-likes subheader'>
              When you like a photo on 5000px, you'll see it here. Discover new photos in the Editor's Choice gallery.
            </p>
            <Link className='link-button'
              to='/discover/editors'
            >
              Editor's Choice
            </Link>
          </div>
        )
      }
    } else {
      gallery = <GridLoader />
    }

    return (
      <div className="home-feed-container">
        <FeedHeader
          title={'Liked Photos'}
          description={''}
        />
        <div className="home-feed-gallery">
        { gallery }
        </div>
      </div>
    )
  }
}