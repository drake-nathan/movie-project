import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { PropTypes } from 'prop-types';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w185';

const Movie = ({ id, img, title }) => (
  <Link to={`/${id}`}>
    <Overdrive id={String(id)}>
      <Poster src={`${POSTER_PATH}${img}`} alt={title} />
    </Overdrive>
  </Link>
);

Movie.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
};

export default Movie;

export const Poster = styled.img`
  box-shadow: 0 0 30px white;
  &:hover {
    transform: scale(1.06);
    transition-duration: 300ms;
  }
`;
