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
        <h2>List of Starships</h2>
        <button onClick={handleFetchStarships}>Display Starships</button>
      </div>
      <div className="row">
        {starships.map(starship => (
          <div key={starship.name} className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{starship.name}</h5>
                <p className="card-text">
                  Passengers:{' '}
                  {starship.passengers <= 0
                    ? 'Just for one person'
                    : starship.passengers}{' '}
                  | Consumables: {starship.consumables} | Crew: {starship.crew}
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
