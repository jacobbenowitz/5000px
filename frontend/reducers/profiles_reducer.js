import {
  RECEIVE_CURRENT_PROFILE,
  RECEIVE_PROFILE,
  RECEIVE_PROFILES,
  REMOVE_PROFILE,
  REQUEST_PROFILES
} from '../actions/profile/profile_actions';

import {
  RECEIVE_FOLLOW,
  DELETE_FOLLOW
} from '../actions/follows/follows_actions'

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
      return nextState;
    case RECEIVE_CURRENT_PROFILE:
      nextState.all[action.profile.id] = action.profile;
      return nextState;
    case RECEIVE_PROFILES:
      nextState.all = action.profiles;
      nextState.status = DONE
      return nextState;
    case REMOVE_PROFILE:
      delete nextState.all[action.profileId];
      return nextState;
    case RECEIVE_FOLLOW:
      // for current user's profile
      let following = nextState.all[action.follow.follower_id].following
      nextState.all[action.follow.follower_id].following = following.concat(action.follow.id)
      // for the receipent of the follow
      let followers = nextState.all[action.follow.followee_id].followers
      nextState.all[action.follow.followee_id].followers = followers.concat(action.follow.id)
      return nextState;
    case DELETE_FOLLOW:
      // for the followee
      let nextFollows = nextState.all[action.follow.follower_id].following.filter(follow => follow.follower_id !== action.follow.follower_id);
      nextState.all[action.follow.follower_id].following = nextFollows;
      // for the receipent of the follow
      let nextFollowing = nextState.all[action.follow.followee_id].followers.filter(follow => follow.follower_id !== action.follow.follower_id);
      debugger
      nextState.all[action.follow.followee_id].followers = nextFollowing;
      return nextState;
    default:
      return prevState;
  }
}

export default profilesReducer;