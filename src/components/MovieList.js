import { useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';
import MovieDetails from './MovieDetails';

const MovieList = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieDetails movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
