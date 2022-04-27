import * as ProfilePhotoActions from '../../util/profile_photo_util'

export const RECEIVE_PROFILE_PHOTO = 'RECEIVE_PROFILE_PHOTO'; // photo

// actions
const receiveProfilePhoto = photo => ({
  type: RECEIVE_PROFILE_PHOTO,
  photo
})


// thunk actions
export const fetchProfilePhoto = profilePhotoId => dispatch => {
  return ProfilePhotoActions.fetchProfilePhoto(profilePhotoId).then(photo =>
    dispatch(receiveProfilePhoto(photo)))
}

export const uploadProfilePhoto = formData => dispatch => {
  return (
    ProfilePhotoActions.uploadProfilePhoto(formData).then(
      // success callback
      // TODO: render success
      response => console.log(response.message),
      response => (console.log(response.responseJSON))
    ).then(photo => dispatch(receiveProfilePhoto(photo)))
    // will this work?
  )

}