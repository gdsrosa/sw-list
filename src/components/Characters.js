import React from 'react';
import { connect } from 'react-redux';
import { PushSpinner } from 'react-spinners-kit';

import {
  handleFetchCharactersAsync,
  getCharacters,
  getLoading,
} from '../ducks/characters';

const Characters = ({ handleFetchCharacters, characters, isLoading }) => {
  if (isLoading) {
    return (
      <div className="col-sm-12">
        <h5>Carregando</h5>
        <PushSpinner size={30} color="#f3ce5d" loading={isLoading} />
      </div>
    );
  }

  return (
    <div className="characters col-sm-12">
      <div>
        <h2>Lista de Personagens</h2>
        <button className="btn btn-warning" onClick={handleFetchCharacters}>
          Listar Personagens
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
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  handleFetchCharacters: () => dispatch(handleFetchCharactersAsync()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);
