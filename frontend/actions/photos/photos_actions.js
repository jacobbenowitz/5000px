import * as PhotoApiUtl from '../../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

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
export const fetchPhoto = photoId => dispatch => {
  return PhotoApiUtl.fetchPhoto(photoId).then(photo =>
    dispatch(receivePhoto(photo)))
}

export const fetchPhotos = () => dispatch => {
  return PhotoApiUtl.fetchPhotos().then(photos =>
    dispatch(receivePhotos(photos)))
}

