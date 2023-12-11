import * as Utils from '../utils';

//Action Type
export const FETCH_STARSHIPS = 'starships/FETCH_STARSHIPS';
export const FETCH_STARSHIPS_SUCCESS = 'starships/FETCH_STARSHIPS_SUCCESS';

// Reducer
const initialState = {
  starships: [],
  isLoading: false,
};

export const starshipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARSHIPS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_STARSHIPS_SUCCESS:
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
export const getLoading = state => state.starshipsReducer.isLoading;

//Action Creators
export const handleFetchStarships = () => ({
  type: FETCH_STARSHIPS,
});
export const handleFetchStarshipsSuccess = starships => ({
  type: FETCH_STARSHIPS_SUCCESS,
  payload: {
    starships,
  },
});

export const handleFetchStarshipsAsync = () => {
  return dispatch => {
    dispatch(handleFetchStarships());
    new Promise((resolve, reject) => {
      Utils.getStarships(
        'https://swapi.dev/api/starships/',
        [],
        resolve,
        reject
      );
    }).then(starships => dispatch(handleFetchStarshipsSuccess(starships)));
  };
};
