import deepFreeze from 'deep-freeze';
import {
  handleFetchStarshipsSuccess,
  FETCH_STARSHIPS_SUCCESS,
  starshipsReducer,
  FETCH_STARSHIPS,
} from './starships';

describe('Action Creators', () => {
  it('should list star wars starships', () => {
    const starships = ['Executor', 'Millennium Falcon', 'Death Star'];
    const expectedAction = {
      type: FETCH_STARSHIPS_SUCCESS,
      payload: {
        starships,
      },
    };
    expect(handleFetchStarshipsSuccess(starships)).toEqual(expectedAction);
  });
});

describe('Reducer', () => {
  it('should return the initial state', () => {
    const before = deepFreeze({
      starships: [],
      isLoading: false,
    });

    const action = deepFreeze({
      type: undefined,
    });

    const after = {
      starships: [],
      isLoading: false,
    };

    expect(starshipsReducer(before, action)).toEqual(after);
  });

  it('should return a array of starships', () => {
    const starships = ['Executor', 'Millennium Falcon', 'Death Star'];
    const before = deepFreeze({
      starships: [],
      isLoading: false,
    });

    const action = deepFreeze({
      type: FETCH_STARSHIPS_SUCCESS,
      payload: {
        starships,
      },
    });

    const after = {
      starships: ['Executor', 'Millennium Falcon', 'Death Star'],
      isLoading: false,
    };

    expect(starshipsReducer(before, action)).toEqual(after);
  });

  it('should isLoading return true', () => {
    const before = deepFreeze({
      starships: [],
      isLoading: false,
    });

    const action = deepFreeze({
      type: FETCH_STARSHIPS,
      payload: {
        isLoading: true,
      },
    });

    const after = {
      starships: [],
      isLoading: true,
    };
    expect(starshipsReducer(before, action)).toEqual(after);
  });
});
