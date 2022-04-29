import * as ProfileApiUtil from '../../util/profile_api_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'; // profile
export const RECEIVE_CURRENT_PROFILE = 'RECEIVE_CURRENT_PROFILE'; // profile
export const RECEIVE_PROFILES = 'RECEIVE_PROFILES'; // [profiles]
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS'; // [errors]
export const REMOVE_PROFILE = 'REMOVE_PROFILE'; // profileId

// regular action creators
export const receiveProfile = profile => {
  // debugger
  return {
    type: RECEIVE_PROFILE,
    profile
  }
}
export const receiveCurrentProfile = profile => {
  // debugger
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

// thunk action creators
export const fetchProfiles = () => dispatch => {
  ProfileApiUtil.fetchProfiles().then(profiles =>
    dispatch(receiveProfile(profiles))
  )
}

export const fetchProfile = profileId => dispatch => {
  // debugger
  return ProfileApiUtil.fetchProfile(profileId).then(profile =>
    dispatch(receiveProfile(profile))
  )
}

export const createProfile = profile => dispatch => {
  // debugger
  ProfileApiUtil.createProfile(profile).then(profile => {
    dispatch(receiveProfile(profile))
    dispatch(receiveCurrentProfile(profile))
  }
  ), error => (
    dispatch(receiveProfileErrors(error.responseJSON))
  )
}

export const updateProfile = profile => dispatch => {
  // debugger
  return ProfileApiUtil.updateProfile(profile).then(profile =>
    dispatch(receiveProfile(profile))
  ), error => (
    dispatch(receiveProfileErrors(error.responseJSON))
  )
}

export const deleteProfile = profileId => dispatch => {
  ProfileApiUtil.deleteProfile(profileId).then(profile =>
    dispatch(removeProfile(profile.id)))
}