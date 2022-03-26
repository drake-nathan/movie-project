import { combineReducers } from 'redux';
import { MoviesReducer } from './reducer-movies';
import { PagesReducer } from './reducer-total-pages';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  total_pages: PagesReducer,
});

export default rootReducer;
