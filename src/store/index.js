import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { charactersReducer } from '../ducks/characters';
import { starshipsReducer } from '../ducks/starships';

const rootReducer = combineReducers({
  charactersReducer,
  starshipsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
