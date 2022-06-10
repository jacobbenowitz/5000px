import React from 'react'
import DiscoverRows from './discover_photo_gallery'
import GridLoader from '../galleries/gallery_grid_loader'
import collectionTitles from '../../util/collection_titles'

const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'


export default class PhotoCollection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: IDLE,
      pageTitle: '',
      pageDescription: '',
      page: '',
    }
  }

  componentDidMount() {
    const { fetchPhotos, category } = this.props;

    let pageCopy = this.getTitleAndDescription(category)

    this.setState({
      status: BUSY,
      pageTitle: pageCopy.title,
      pageDescription: pageCopy.description,
      category: category,
    }, () => {
      fetchPhotos()
    })
  }

  componentDidUpdate() {
    const { category, allProfiles, musicPhotos } = this.props;

    if (category !== this.state.category) {
      let pageCopy = this.getTitleAndDescription(category)
      this.setState({
        pageTitle: pageCopy.title,
        pageDescription: pageCopy.description,
        category: category,
      })
    }
    if (this.state.status === BUSY && musicPhotos) {
      let photos = this.getPhotoCollection(category)
      this.setState({
        status: DONE,
        photos: photos
      })
    }
  }

  getPhotoCollection(category) {
    const { minimalismPhotos, musicPhotos, abstractPhotos, animalsPhotos, chocolatePhotos, sportsPhotos } = this.props;

    if (category === 'minimalism') {
      return minimalismPhotos
    } else if (category === 'chocolate') {
      return chocolatePhotos
    } else if (category === 'music') {
      return musicPhotos
    } else if (category === 'abstract') {
      return abstractPhotos
    } else if (category === 'animals') {
      return animalsPhotos
    } else if (category === 'sports') {
      return sportsPhotos
    }
  }

  getTitleAndDescription(category) {
    let title, description;
    if (category === 'minimalism') {
      title = collectionTitles.minimalism.title
      description = collectionTitles.minimalism.description
    } else if (category === 'chocolate') {
      title = collectionTitles.chocolate.title
      description = collectionTitles.chocolate.description
    } else if (category === 'music') {
      title = collectionTitles.music.title
      description = collectionTitles.music.description
    } else if (category === 'abstract') {
      title = collectionTitles.abstract.title
      description = collectionTitles.abstract.description
    } else if (category === 'animals') {
      title = collectionTitles.animals.title
      description = collectionTitles.animals.description
    } else if (category === 'sports') {
      title = collectionTitles.sports.title
      description = collectionTitles.sports.description
    }
    return { title: title, description: description }
  }

  render() {
    const { pageTitle, pageDescription, status, photos } = this.state;
    let coverStyle, gallery;

    if (status === DONE) {
      coverStyle = (
        {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), 
          rgba(0, 0, 0, 0)), url(${photos[0].photoUrl})`
        }
      )
      gallery = <DiscoverRows photos={photos} />
    } else {
      gallery = <GridLoader />
      coverStyle = (
        {
          backgroundImage: 'linear-gradient(315deg, #485461 0 %, #28313b 74 %)',
          backgroundColor: '#485461'
        }
      )
    }

    return (
      <div className='collection-container'>
        <div className="collection-cover-container">
          <div className="cover-img-box" style={coverStyle} />
        </div>
        <div className='collection-header'>
          <span>{pageTitle}</span>
          <span>{pageDescription}</span>
        </div>
        <div className='collection-details'>

        </div>
        <div className='collection-feed-gallery'>
          {gallery}
        </div>
      </div>
    )
  }
}