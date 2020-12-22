import { useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';

const Header = () => {
  const [movies] = useContext(MoviesContext);

  return (
    <header>
      <div className="hero">
        <div className="hero-body">
          <h1 className="title">Watchlist App</h1>
          <h2 className="subtitle">You have {movies.length} movies to watch</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
