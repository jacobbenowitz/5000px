import * as ProfileApiUtil from '../../util/profile_api_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'; // profile
export const REQUEST_PROFILES = 'REQUEST_PROFILES'; // profile
export const RECEIVE_CURRENT_PROFILE = 'RECEIVE_CURRENT_PROFILE'; // profile
export const RECEIVE_PROFILES = 'RECEIVE_PROFILES'; // [profiles]
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS'; // [errors]
export const REMOVE_PROFILE = 'REMOVE_PROFILE'; // profileId

// regular action creators
export const receiveProfile = profile => {
  return {
    type: RECEIVE_PROFILE,
    profile
  }
}
export const receiveCurrentProfile = profile => {
  return {
    type: RECEIVE_CURRENT_PROFILE,
    profile
  }
}

export const receiveProfiles = profiles => ({
  type: RECEIVE_PROFILES,
  profiles
})

export const receiveProfileErrors = errors => ({
  type: RECEIVE_PROFILE_ERRORS,
  errors
})

export const removeProfile = profileId => ({
  type: REMOVE_PROFILE,
  profileId
})

export const requestProfiles = () => ({
  type: REQUEST_PROFILES
})

// thunk action creators
export const fetchProfiles = () => dispatch => {
  ProfileApiUtil.fetchProfiles().then(profiles => {
    dispatch(receiveProfiles(profiles))
  })
}

export const fetchProfile = profileId => dispatch => {
  return ProfileApiUtil.fetchProfile(profileId)
    .then(profile => {
      dispatch(receiveProfile(profile))
    })
}

export const fetchCurrentProfile = profileId => dispatch => {
  return ProfileApiUtil.fetchProfile(profileId)
    .then(profile => {
      dispatch(receiveCurrentProfile(profile))
    })
}

export const createProfile = profile => dispatch => {
  debugger
  ProfileApiUtil.createProfile(profile).then(profile => {
    dispatch(receiveProfile(profile))
    dispatch(receiveCurrentProfile(profile))
  }
  ), error => (
    dispatch(receiveProfileErrors(error.responseJSON))
  )
}

export const updateProfile = profile => dispatch => {
  return ProfileApiUtil.updateProfile(profile)
    .then(profile => dispatch(receiveProfile(profile))
  ), error => (
    dispatch(receiveProfileErrors(error.responseJSON))
  )
}

export const updateProfilePhoto = (formData, profileId) => {
  return ProfileApiUtil.updateProfilePhoto(formData, profileId)
    .then(profile => dispatch(receiveProfile(profile))
    ), error => (
      dispatch(receiveProfileErrors(error.responseJSON))
    )
}

export const deleteProfile = profileId => dispatch => {
  ProfileApiUtil.deleteProfile(profileId).then(profile =>
    dispatch(removeProfile(profile.id)))
}