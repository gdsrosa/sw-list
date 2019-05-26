import deepFreeze from 'deep-freeze';
import {
  handleFetchCharactersSuccess,
  FETCH_CHARACTERS_SUCCESS,
  charactersReducer,
  FETCH_CHARACTERS,
} from './characters';

describe('Action Creators', () => {
  it('should list star wars characters', () => {
    const characters = ['Luke Skywalker', 'Darth Vader', 'Yoda'];
    const expectedAction = {
      type: FETCH_CHARACTERS_SUCCESS,
      payload: {
        characters,
      },
    };
    expect(handleFetchCharactersSuccess(characters)).toEqual(expectedAction);
  });
});

describe('Reducer', () => {
  it('should return the initial state', () => {
    const before = deepFreeze({
      characters: [],
      isLoading: false,
    });

    const action = deepFreeze({
      type: undefined,
    });

    const after = {
      characters: [],
      isLoading: false,
    };

    expect(charactersReducer(before, action)).toEqual(after);
  });

  it('should return a array of characters', () => {
    const characters = ['Luke Skywalker', 'Darth Vader', 'Yoda'];
    const before = deepFreeze({
      characters: [],
      isLoading: false,
    });

    const action = deepFreeze({
      type: FETCH_CHARACTERS_SUCCESS,
      payload: {
        characters,
      },
    });

    const after = {
      characters: ['Luke Skywalker', 'Darth Vader', 'Yoda'],
      isLoading: false,
    };

    expect(charactersReducer(before, action)).toEqual(after);
  });

  it('should isLoading return true', () => {
    const before = deepFreeze({
      characters: [],
      isLoading: false,
    });

    const action = deepFreeze({
      type: FETCH_CHARACTERS,
      payload: {
        isLoading: true,
      },
    });

    const after = {
      characters: [],
      isLoading: true,
    };
    expect(charactersReducer(before, action)).toEqual(after);
  });
});
