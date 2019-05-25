import React from 'react';
import { connect } from 'react-redux';

import { handleFetchCharactersAsync, getCharacters } from '../ducks/characters';

const Characters = ({ handleFetchCharacters, characters, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="characters col-sm-12">
      <div>
        <h2>Lista de Personagens</h2>
        <button className="btn btn-warning" onClick={handleFetchCharacters}>
          Mostrar Personagens
        </button>
      </div>
      <div className="row character">
        {characters.map(character => (
          <div key={character.name} className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">{character.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
