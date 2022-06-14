import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import profilesReducer from './profiles_reducer';
import photosReducer from './photos_reducer'
import likesReducer from "./likes_reducer";
import followsReducer from "./follows_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  photos: photosReducer,
  profiles: profilesReducer,
  likes: likesReducer,
  follows: followsReducer
});

export default entitiesReducer;