import { FETCH_CHARACTERS } from './actions';
import * as Utils from '../utils';

export const handleFetchCharacters = characters => ({
  type: FETCH_CHARACTERS,
  payload: {
    characters,
  },
});

export const handleFetchCharactersAsync = () => {
  return dispatch => {
    new Promise((resolve, reject) => {
      Utils.getPeople('https://swapi.co/api/people/', [], resolve, reject);
    }).then(characters => dispatch(handleFetchCharacters(characters)));
  };
};
