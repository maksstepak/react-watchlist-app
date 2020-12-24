import { useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';
import { actionTypes } from '../reducers/moviesReducer';

const MovieDetails = ({ movie }) => {
  const { dispatch } = useContext(MoviesContext);

  return (
    <div className="card my-3">
      <div
        className={`card-content ${
          movie.watched ? 'has-background-success' : ''
        }`}
      >
        <p
          className={`has-text-weight-bold is-size-5 ${
            movie.watched ? 'has-text-white' : ''
          }`}
        >
          {movie.title}
        </p>
        {movie.type === 'movie' ? (
          <span className="tag is-warning">Movie</span>
        ) : (
          <span className="tag is-link">TV Series</span>
        )}
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <button
            className="button is-primary is-small"
            onClick={() => {
              dispatch({ type: actionTypes.TOGGLE_WATCHED, id: movie.id });
            }}
          >
            <span className="icon">
              <i
                className={`fas ${movie.watched ? 'fa-eye-slash' : 'fa-eye'}`}
              ></i>
            </span>
            <span>Mark as {movie.watched ? 'unwatched' : 'watched'}</span>
          </button>
        </div>
        <div className="card-footer-item">
          <button
            className="button is-danger is-small"
            onClick={() => {
              dispatch({ type: actionTypes.REMOVE_MOVIE, id: movie.id });
            }}
          >
            <span className="icon">
              <i className="fas fa-trash-alt"></i>
            </span>
            <span>Remove</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default MovieDetails;
