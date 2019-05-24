import React from 'react';
import { connect } from 'react-redux';
import { handleFetchStarshipsAsync, getStarships } from '../ducks/starships';

const Starships = ({ isLoading, starships, handleFetchStarships }) => (
  <div className="starships">
    {isLoading ? (
      <div />
    ) : (
      <div>
        <h2>List of Starships</h2>
        <button onClick={handleFetchStarships}>Display Starships</button>
        <ul>
          {starships.map(starship => (
            <li key={starship.name}>
              <strong>{starship.name}</strong>
              <ul>
                <li>
                  Passengers:{' '}
                  {starship.passengers <= 0
                    ? 'Just for one person'
                    : starship.passengers}
                </li>
                <li>Consumables: {starship.consumables}</li>
                <li>Crew: {starship.crew}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

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
