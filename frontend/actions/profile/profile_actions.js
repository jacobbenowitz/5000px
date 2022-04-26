import * as ProfileApiUtil from '../../util/profile_api_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'; // profile
export const RECEIVE_PROFILES = 'RECEIVE_PROFILES'; // [profiles]
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS'; // [errors]
export const REMOVE_PROFILE = 'REMOVE_PROFILE'; // profileId

// regular action creators
const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
})

const receiveProfiles = profiles => ({
  type: RECEIVE_PROFILES,
  profiles
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
export const fetchProfiles = () => dispatch => {
  ProfileApiUtil.fetchProfiles().then(profiles =>
    dispatch(receiveProfile(profiles))
  )
}

export const fetchProfile = profileId => dispatch => {
  ProfileApiUtil.fetchProfile(profileId).then(profile =>
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