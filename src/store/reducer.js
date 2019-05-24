import { FETCH_CHARACTERS } from './actions';

const initialState = {
  characters: [],
  isLoading: true,
};

const reducer = (state = initialState, action) => {
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

export default reducer;
