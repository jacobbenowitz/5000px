import * as PhotoApiUtil from '../../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO'; // photo
export const REMOVE_PHOTO = 'REMOVE_PHOTO'; // photo
export const RECEIVE_PHOTO_UPDATE = 'RECEIVE_PHOTO_UPDATE'; // photo
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'; // [photos]
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS'; // 'error...'
export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
// actions
export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
})

export const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
})

export const receivePhotoUpdate = photo => ({
  type: RECEIVE_PHOTO_UPDATE,
  photo
})

export const receivePhotos = photos => {
  return {
    type: RECEIVE_PHOTOS,
    photos
  }
};

export const requestPhotos = () => ({
  type: REQUEST_PHOTOS
})

export const receivePhotoErrors = messages => {
  return {
    type: RECEIVE_PHOTO_ERRORS,
    messages
  }
}

// thunk actions
export const fetchPhoto = photoId => dispatch => {
  return PhotoApiUtil.fetchPhoto(photoId).then(photo =>
    dispatch(receivePhoto(photo)))
}

export const deletePhoto = photoId => dispatch => {
  return PhotoApiUtil.deletePhoto(photoId).then(() =>
    dispatch(removePhoto(photoId)))
}

export const fetchPhotos = () => dispatch => {
  dispatch(requestPhotos())
  return PhotoApiUtil.fetchPhotos().then(photos =>
    dispatch(receivePhotos(photos)))
}


export const uploadPhoto = formData => dispatch => {
  return PhotoApiUtil.uploadPhoto(formData)
    .then(response => {
      return dispatch(receivePhotoErrors(response.message))
    }, error => {
      return dispatch(receivePhotoErrors(error.responseJSON))
    })
};

export const updatePhoto = photo => dispatch => {
  return PhotoApiUtil.updatePhoto(photo)
    .then(response => {
      return dispatch(receivePhotoErrors(response.message))
    }, error => {
      return dispatch(receivePhotoErrors(error.responseJSON))
    })
  // .then(message => dispatch(receivePhotoUpdate(message)))
};