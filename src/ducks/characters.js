import * as Utils from '../utils';

//Action Type
const FETCH_CHARACTERS = 'characters/FETCH_CHARACTERS';

// Reducer
const initialState = {
  characters: [],
  isLoading: true,
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload.characters,
        isLoading: false,
      };
    default:
      return state;
  }
};

//Selectors
export const getCharacters = state => state.charactersReducer.characters;

//Action Creators
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
