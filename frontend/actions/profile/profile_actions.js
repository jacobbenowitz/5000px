import * as ProfileApiUtil from '../../util/profile_api_util';


export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'; // profile
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS'; // [errors]

// regular action creators
const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
})

const receiveProfileErrors = errors => ({
  type: RECEIVE_PROFILE_ERRORS
})

// thunk action creators
export const createProfile = profile => dispatch => {
  ProfileApiUtil.createProfile(profile).then(profile => {
    dispatch(receiveProfile(profile))
  })
}

export const fetchProfile = profileId => dispatch => {
  ProfileApiUtil.fetchProfile(profileId).then(profile => {
    dispatch(receiveProfile(profile))
  })
}