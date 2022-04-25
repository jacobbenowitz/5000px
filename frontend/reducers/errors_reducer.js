import { combineReducers } from "redux";
import profilesErrorReducer from "./profiles_errors_reducer";
import sessionErrorsReducer from './session_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  profiles: profilesErrorReducer
});

export default errorsReducer;