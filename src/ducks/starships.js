import * as Utils from '../utils';

//Action Type
const FETCH_STARSHIPS = 'starships/FETCH_STARSHIPS';

// Reducer
const initialState = {
  starships: [],
  isLoading: true,
};

export const starshipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARSHIPS:
      return {
        ...state,
        starships: action.payload.starships,
        isLoading: false,
      };
    default:
      return state;
  }
};

//Selectors
export const getStarships = state => state.starshipsReducer.starships;

//Action Creators
export const handleFetchStarships = starships => ({
  type: FETCH_STARSHIPS,
  payload: {
    starships,
  },
});

export const handleFetchStarshipsAsync = () => {
  return dispatch => {
    new Promise((resolve, reject) => {
      Utils.getStarships(
        'https://swapi.co/api/starships/',
        [],
        resolve,
        reject
      );
    }).then(starships => dispatch(handleFetchStarships(starships)));
  };
};
