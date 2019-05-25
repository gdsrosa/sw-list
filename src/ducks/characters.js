import * as Utils from '../utils';

//Action Type
const FETCH_CHARACTERS = 'characters/FETCH_CHARACTERS';
const FETCH_CHARACTERS_SUCCESS = 'characters/FETCH_CHARACTERS_SUCCESS';

// Reducer
const initialState = {
  characters: [],
  isLoading: false,
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, isLoading: true };
    case FETCH_CHARACTERS_SUCCESS:
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
export const getLoading = state => state.charactersReducer.isLoading;

//Action Creators
const handleFetchCharacters = () => ({
  type: FETCH_CHARACTERS,
});

const handleFetchCharactersSuccess = characters => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: {
    characters,
  },
});

export const handleFetchCharactersAsync = () => {
  return dispatch => {
    dispatch(handleFetchCharacters());
    new Promise((resolve, reject) => {
      Utils.getPeople('https://swapi.co/api/people/', [], resolve, reject);
    }).then(characters => {
      dispatch(handleFetchCharactersSuccess(characters));
    });
  };
};
