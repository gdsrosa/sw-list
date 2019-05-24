import React from 'react';
import { connect } from 'react-redux';

import { handleFetchCharactersAsync } from '../store/actionCreators';
import { getCharacters } from '../store/selectors';

const Characters = ({ handleFetchCharacters, characters, isLoading }) => (
  <div className="characters">
    {isLoading ? (
      <h2> Loading...</h2>
    ) : (
      <div>
        <h2>List of Characters</h2>
        <button onClick={handleFetchCharacters}>Display Characters</button>
        <ul>
          {characters.map(character => (
            <li key={character.name}>{character.name}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  characters: getCharacters(state),
});

const mapDispatchToProps = dispatch => ({
  handleFetchCharacters: () => dispatch(handleFetchCharactersAsync()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);
