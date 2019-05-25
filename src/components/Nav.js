import React from 'react';
import { Link } from '@reach/router';

const Nav = () => (
  <div>
    <ul className="nav justify-content-center">
      <li className="nav-item nav-link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="characters">Characters</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="starships">Starships</Link>
      </li>
    </ul>
  </div>
);

export default Nav;
