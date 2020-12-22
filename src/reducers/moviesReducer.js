import { v4 as uuidv4 } from 'uuid';

export const actionTypes = {
  ADD_MOVIE: 'ADD_MOVIE',
  REMOVE_MOVIE: 'REMOVE_MOVIE',
  TOGGLE_WATCHED: 'TOGGLE_WATCHED',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_MOVIE:
      return [
        {
          id: uuidv4(),
          title: action.title,
          watched: false,
        },
        ...state,
      ];
    case actionTypes.REMOVE_MOVIE:
      return state.filter((movie) => movie.id !== action.id);
    case actionTypes.TOGGLE_WATCHED:
      return state.map((movie) =>
        movie.id === action.id ? { ...movie, watched: !movie.watched } : movie
      );
    default:
      return state;
  }
};

export default reducer;
