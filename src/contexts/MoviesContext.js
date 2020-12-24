import { createContext, useReducer, useEffect } from 'react';
import { reducer } from '../reducers/moviesReducer';

export const MoviesContext = createContext();

const initialState = [];

const initializer = () => {
  return JSON.parse(localStorage.getItem('movies')) || [];
};

export const MoviesContextProvider = ({ children }) => {
  const [movies, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  return (
    <MoviesContext.Provider value={{ movies, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};
