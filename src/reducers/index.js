import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import matchesReducer from "./matchesReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  heroes: heroesReducer,
  matches: matchesReducer,
  user: usersReducer,
});
