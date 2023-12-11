import React from 'react';
import { connect } from 'react-redux';
import { PushSpinner } from 'react-spinners-kit';

import { handleFetchStarshipsAsync, getStarships } from '../ducks/starships';
import { getLoading } from '../ducks/starships';

const Starships = ({ isLoading, starships, handleFetchStarships }) => {
  if (isLoading) {
    return (
      <div className="col-sm-12">
        <h5>Carregando</h5>
        <PushSpinner size={30} color="#f3ce5d" loading={isLoading} />
      </div>
    );
  }
  return (
    <div className="starships col-sm-12">
      <div>
        <h2>Lista de Naves Espaciais</h2>
        <button className="btn btn-warning" onClick={handleFetchStarships}>
          Listar Naves
        </button>
      </div>
      <div className="row starship">
        {starships.map(starship => (
          <div key={starship.name} className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{starship.name}</h5>
                <p className="card-text">
                  Passageiros:{' '}
                  {starship.passengers <= 0
                    ? 'Está nave não transporta passageiros.'
                    : starship.passengers}
                  <br /> Fabricante: {starship.manufacturer} <br /> Tripulação:{' '}
                  {starship.crew} <br /> Modelo: {starship.model}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  starships: getStarships(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  handleFetchStarships: () => dispatch(handleFetchStarshipsAsync()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Starships);
