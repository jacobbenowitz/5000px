import * as ProfilePhotoActions from '../../util/profile_photo_util'

export const RECEIVE_PROFILE_PHOTO = 'RECEIVE_PROFILE_PHOTO'; // photo
export const RECEIVE_NEW_PROFILE_PHOTO = 'RECEIVE_NEW_PROFILE_PHOTO'; // photo

// actions
const receiveProfilePhoto = photo => ({
  type: RECEIVE_PROFILE_PHOTO,
  photo
})

const receiveNewProfilePhoto = response => ({
  type: RECEIVE_NEW_PROFILE_PHOTO,
  response
})

// thunk actions
export const fetchProfilePhoto = profilePhotoId => dispatch => {
  return ProfilePhotoActions.fetchProfilePhoto(profilePhotoId).then(photo =>
    dispatch(receiveProfilePhoto(photo)))
}

export const uploadProfilePhoto = formData => dispatch => {
  return (
    ProfilePhotoActions.uploadProfilePhoto(formData).then(
      response => dispatch(receiveNewProfilePhoto(response))
    )
  )

}