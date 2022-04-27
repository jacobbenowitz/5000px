import * as PhotoApiUtil from '../../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO'; // photo
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'; // [photos]

// actions
const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
})

const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
})

// thunk actions
export const fetchPhoto = photoId => dispatch => (
  PhotoApiUtil.fetchPhoto(photoId).then(photo =>
    dispatch(receivePhoto(photo)))
)

export const fetchPhotos = () => dispatch => (
  PhotoApiUtil.fetchPhotos().then(photos =>
    dispatch(receivePhotos(photos)))
)
