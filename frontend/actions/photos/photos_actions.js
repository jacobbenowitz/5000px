import * as PhotoApiUtil from '../../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO'; // photo
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'; // [photos]
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS'; // 'error...'

// actions
export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
})

export const receivePhotos = photos => {
  debugger
  return {
    type: RECEIVE_PHOTOS,
    photos
  }
};

export const receivePhotoErrors = messages => {
  debugger
  return {
    type: RECEIVE_PHOTO_ERRORS,
    messages
  }
}

// thunk actions
export const fetchPhoto = photoId => dispatch => {
  debugger
  return PhotoApiUtil.fetchPhoto(photoId).then(photo =>
    dispatch(receivePhoto(photo)))
}

export const fetchPhotos = () => dispatch => {
  debugger
  return PhotoApiUtil.fetchPhotos().then(photos =>
    dispatch(receivePhotos(photos)))
}


export const uploadPhoto = formData => dispatch => {
  return PhotoApiUtil.uploadPhoto(formData)
    .then(success => {
      return dispatch(receivePhotoErrors(success.message))
    }, error => {
      return dispatch(receivePhotoErrors(error.responseJSON))
    }
    )
};