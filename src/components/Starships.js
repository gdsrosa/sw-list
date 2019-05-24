import React from 'react';
import * as Utils from '../utils';

class Starships extends React.Component {
  constructor() {
    super();
    this.state = {
      starships: [],
      isLoading: true,
    };

    this.handleFetchStarships = this.handleFetchStarships.bind(this);
  }

  handleFetchStarships() {
    new Promise((resolve, reject) => {
      Utils.getStarships(
        'https://swapi.co/api/starships/',
        [],
        resolve,
        reject
      );
    }).then(starships => this.setState({ starships, isLoading: false }));
  }

  render() {
    const { starships, isLoading } = this.state;
    return (
      <div className="starships">
        <h1>Starships Component</h1>
        <button onClick={this.handleFetchStarships}>Display Starships</button>
        {isLoading ? (
          <div />
        ) : (
          <div>
            <h2>List of Starships</h2>
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
  }
}

export default Starships;
