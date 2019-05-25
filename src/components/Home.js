import React from 'react';
import { Link } from '@reach/router';

import SW from '../static/sw.png';

const Home = () => (
  <div className="jumbotron">
    <img className="sw-image" src={SW} alt="sw-logo" />
    <h1>Star Wars List</h1>
    <p>
      Esta é uma aplicação onde você consegue visualizar todos os personagens e
      naves espacias usadas no episódios de Star Wars. Você pode acessar as
      páginas utilizando a <code>navbar</code> acima, ou utilizando os links
      abaixo:
      <br />
      <Link to="characters">Personagens</Link> <br />
      <Link to="starships">Naves Espaciais</Link>
    </p>
  </div>
);

export default Home;
