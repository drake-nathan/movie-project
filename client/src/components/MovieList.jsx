import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import { fetchMovies } from '../actions';
import Movie from './Movie';

const MovieList = () => {
  const movieOrder = useSelector((state) => state.movies.order);
  const movies = useSelector((state) => state.movies.entries);
  const totalPages = useSelector((state) => state.total_pages);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const loadItems = (page) => {
    if (page < totalPages || totalPages === 0) {
      dispatch(fetchMovies(page));
    } else {
      setHasMoreItems(false);
    }
  };

  const movieComponents = movieOrder.map((id) => {
    const movie = movies[id];

    return (
      <Movie
        id={movie.id}
        key={id}
        title={movie.title}
        img={movie.poster_path}
      />
    );
  });

  return (
    <InfiniteScroll loadMore={loadItems} hasMore={hasMoreItems}>
      <MovieGrid>{movieComponents}</MovieGrid>
    </InfiniteScroll>
  );
};

export default MovieList;

const MovieGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
`;
