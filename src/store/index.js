import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { charactersReducer } from '../ducks/characters';
import { starshipsReducer } from '../ducks/starships';

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({
  charactersReducer,
  starshipsReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk),
    reduxDevTools
  )
);

export default store;
