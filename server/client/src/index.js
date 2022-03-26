import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import './App.css';

import App from './components/App';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router>
      <Nav />
      <App>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/:id" element={<MovieDetail />} />
        </Routes>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
