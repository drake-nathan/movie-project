import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const App = ({ children }) => <AppContainer>{children}</AppContainer>;

App.propTypes = {
  children: PropTypes.any,
};

export default App;

const AppContainer = styled.div`
  padding-top: 90px;
`;
