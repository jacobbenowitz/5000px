import * as ProfilePhotoActions from '../../util/profile_api_util';

export const RECEIVE_PROFILE_PHOTO = 'RECEIVE_PROFILE_PHOTO'; // photo
export const RECEIVE_PROFILE_PHOTOS = 'RECEIVE_PROFILE_PHOTOS'; // [photos]

// actions
const receiveProfilePhoto = photo => ({
  type: RECEIVE_PROFILE_PHOTO,
  photo
})


// thunk actions
export const fetchProfilePhoto = profilePhotoId => dispatch => {
  return PhotoApiUtil.fetchProfilePhoto(profilePhotoId).then(photo =>
    dispatch(receiveProfilePhoto(photo)))
}

export const fetchProfilePhotos = () => dispatch => {
  return PhotoApiUtil.fetchProfilePhotos().then(photos =>
    dispatch(receiveProfilePhotos(photos)))
}


export const uploadProfilePhoto = formData => dispatch => {
  return PhotoApiUtil.uploadProfilePhoto(formData).then(
    // success callback
    // TODO: render success
    response => console.log(response.message),
    response => (
      console.log(response.responseJSON)
    )
  )
}