import { createContext, useReducer } from 'react';
import { reducer } from '../reducers/moviesReducer';

export const MoviesContext = createContext();

const initialState = [];

export const MoviesContextProvider = ({ children }) => {
  const [movies, dispatch] = useReducer(reducer, initialState);

  return (
    <MoviesContext.Provider value={{ movies, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};
