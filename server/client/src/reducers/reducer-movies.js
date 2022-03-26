import { normalize, schema } from 'normalizr';
import _ from 'lodash';
import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/types';

const DEFAULT_STATE = {
  entries: {},
  order: [],
};

const moviesSchema = new schema.Entity('movies', undefined);

export const MoviesReducer = (
  state = DEFAULT_STATE,
  { type, payload } = {}
) => {
  switch (type) {
    case FETCH_MOVIES:
      // eslint-disable-next-line no-case-declarations
      const normalizedMovies = normalize(payload.results, [moviesSchema]);
      return {
        // uniq ensures that if a movie was added with FETCH_MOVIE it
        // won't show up twice in the list
        order: _.uniq([...state.order, ...normalizedMovies.result]),
        entries: { ...normalizedMovies.entities.movies, ...state.entries },
      };
    case FETCH_MOVIE:
      return {
        order: _.union([...state.order], [payload.id]),
        entries: { ...state.entries, [payload.id]: payload },
      };
    default:
      return state;
  }
};
