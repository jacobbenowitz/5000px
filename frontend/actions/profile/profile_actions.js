import * as ProfileApiUtil from '../../util/profile_api_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'; // profile
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS'; // [errors]
export const REMOVE_PROFILE = 'REMOVE_PROFILE';

// regular action creators
const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
})

const receiveProfileErrors = errors => ({
  type: RECEIVE_PROFILE_ERRORS,
  errors
})

const removeProfile = profileId => ({
  type: REMOVE_PROFILE,
  profileId
})

// thunk action creators

// fetch profile using userId
export const fetchProfile = userId => dispatch => {
  ProfileApiUtil.fetchProfile(userId).then(profile =>
    dispatch(receiveProfile(profile))
  )
}

export const createProfile = profile => dispatch => {
  ProfileApiUtil.createProfile(profile).then(profile =>
    dispatch(receiveProfile(profile))
  ), error => (
    dispatch(receiveProfileErrors(error.responseJSON))
  )
}

export const updateProfile = profile => dispatch => {
  ProfileApiUtil.updateProfile(profile).then(profile =>
    dispatch(receiveProfile(profile))
  ), error => (
    dispatch(receiveProfileErrors(error.responseJSON))
  )
}

export const deleteProfile = profileId => dispatch => {
  ProfileApiUtil.deleteProfile(profileId).then(profile =>
    dispatch(removeProfile(profile.id)))
}