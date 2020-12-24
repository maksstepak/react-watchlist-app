import { useState, useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';
import { actionTypes } from '../reducers/moviesReducer';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const [movieType, setMovieType] = useState('movie');
  const { dispatch } = useContext(MoviesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.ADD_MOVIE,
      title: title,
      movieType: movieType,
    });
    setTitle('');
    setMovieType('movie');
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Movie Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <div className="select">
              <select
                value={movieType}
                onChange={(e) => {
                  setMovieType(e.target.value);
                }}
              >
                <option value="movie">Movie</option>
                <option value="tv-series">TV Series</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <p className="control">
            <button className="button is-success">
              <span className="icon">
                <i className="fas fa-plus"></i>
              </span>
              <span>Add to watchlist</span>
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
