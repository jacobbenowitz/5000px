import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import profilesReducer from './profiles_reducer';
import photosReducer from './photos_reducer'
import LikesReducer from "./likes_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  photos: photosReducer,
  profiles: profilesReducer,
  likes: LikesReducer
});

export default entitiesReducer;