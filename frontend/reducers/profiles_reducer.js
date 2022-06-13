import {
  RECEIVE_CURRENT_PROFILE,
  RECEIVE_PROFILE,
  RECEIVE_PROFILES,
  REMOVE_PROFILE,
  REQUEST_PROFILES
} from '../actions/profile/profile_actions';

import { merge } from 'lodash';

const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'

const initialState = {
  all: {},
  status: IDLE
}

const profilesReducer = (prevState = initialState, action) => {
  Object.freeze(prevState);
  let nextState = merge({}, prevState);

  switch (action.type) {
    case REQUEST_PROFILES:
      nextState.status = BUSY;
      return nextState;
    case RECEIVE_PROFILE:
      nextState.all[action.profile.id] = action.profile;
      return nextState
    case RECEIVE_PROFILES:
      nextState.all = action.profiles;
      nextState.status = DONE
      return nextState;
    case REMOVE_PROFILE:
      delete nextState.all[action.profileId];
      return nextState;
    default:
      return prevState;
  }
}

export default profilesReducer;