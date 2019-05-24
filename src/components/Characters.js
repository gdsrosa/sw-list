import React from 'react';
import * as Utils from '../utils';

class Characters extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      isLoading: true,
    };

    this.handleFetchCharacters = this.handleFetchCharacters.bind(this);
  }

  handleFetchCharacters() {
    new Promise((resolve, reject) => {
      Utils.getPeople('https://swapi.co/api/people/', [], resolve, reject);
    }).then(people => this.setState({ characters: people, isLoading: false }));
  }

  render() {
    const { characters, isLoading } = this.state;

    return (
      <div className="characters">
        <h1>Characters Component</h1>
        <button onClick={this.handleFetchCharacters}>Display Characters</button>
        {isLoading ? (
          <div>
            <h2>Characters and Starships will be listed here!</h2>
          </div>
        ) : (
          <div>
            <h2>List of Characters</h2>
            <ul>
              {characters.map(character => (
                <li key={character.name}>{character.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Characters;
