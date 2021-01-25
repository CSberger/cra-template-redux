/* Create root reducer, containing all features of the application */
import { combineReducers } from 'redux-immutable';
import searchReducer from './search';

export const rootReducer = combineReducers({
  search: searchReducer,
});
