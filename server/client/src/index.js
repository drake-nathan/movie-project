import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { render } from "react-dom";
import Nav from "./components/Nav";
import App from './components/App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail' 

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router>
      <Nav />
      <App>
        <Routes>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/:id" component={MovieDetail} />
        </Routes>
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
