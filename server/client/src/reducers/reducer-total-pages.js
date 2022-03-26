import { FETCH_MOVIES } from '../actions/types';

export const PagesReducer = (state = 0, { type, payload } = {}) => {
  switch (type) {
    case FETCH_MOVIES:
      return payload.total_pages;
    default:
      return state;
  }
};
