import {
  RECEIVE_FOLLOW,
  RECEIVE_FOLLOWS,
  DELETE_FOLLOW
} from '../actions/follows/follows_actions'

import { merge } from 'lodash'

const followsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let nextState = merge({}, prevState);

  switch (action.type) {
    case RECEIVE_FOLLOWS:
      return action.follows;
    case RECEIVE_FOLLOW:
      nextState[action.follow.id] = action.follow;
      return nextState;
    case DELETE_FOLLOW:
      delete nextState[action.follow.id];
      return nextState;
    default:
      return prevState;
  }
}

export default followsReducer;