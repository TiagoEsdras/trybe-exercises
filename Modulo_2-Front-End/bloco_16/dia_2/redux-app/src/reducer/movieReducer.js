import categories from '../data';

const INITIAL_STATE = {
  selectedCategory: {},
  selectedMovie: {},
  categories: [...categories],
};

const movieReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'SELECT_MOVIE') {
    return {
      selectedCategory: action.category,
      selectedMovie: action.movie,
      ...state,
    };
  }
  return state;
};

export default movieReducer;