import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favMovieReducer from './favMovieReducer';

const reducer = combineReducers({
    movies: movieReducer,
    favorites: favMovieReducer
});

export default reducer;