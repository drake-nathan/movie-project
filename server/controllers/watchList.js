const Movie = require('../models/movie');
const User = require('../models/user');

exports.addMovieToList = function (req, res) {
  User.findOne({ _id: req.user._id }, (err, user) => {
    const movie = new Movie.MovieModel(req.body.movie);

    movie.save((err, m) => {
      user.watchList.push(m);

      user.save((err, u) => {
        res.send({
          movie,
          watchListCount: u.watchList.length,
        });
      });
    });
  });
};

exports.getWatchList = function (req, res) {
  User.findOne({ _id: req.user._id }, (err, user) => {
    res.send({
      movies: user.watchList,
      watchListCount: user.watchList.length,
    });
  });
};
