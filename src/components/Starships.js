import React from 'react';
import { connect } from 'react-redux';
import { handleFetchStarshipsAsync, getStarships } from '../ducks/starships';

const Starships = ({ isLoading, starships, handleFetchStarships }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="starships col-sm-12">
      <div>
        <h2>Lista de Naves Espaciais</h2>
        <button className="btn btn-warning" onClick={handleFetchStarships}>
          Mostrar Naves
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
                    ? 'Just for one person'
                    : starship.passengers}{' '}
                  | Consumíveis: {starship.consumables} | Tripulação:{' '}
                  {starship.crew}
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
});

const mapDispatchToProps = dispatch => ({
  handleFetchStarships: () => dispatch(handleFetchStarshipsAsync()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Starships);
