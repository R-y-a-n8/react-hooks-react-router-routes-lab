import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to="/" activeClassName="active" exact>
        Home
      </NavLink>

      <NavLink to="/movies" activeClassName="active">
        Movies
      </NavLink>

      <NavLink to="/directors" activeClassName="active">
        Directors
      </NavLink>

      <NavLink to="/actors" activeClassName="active">
        Actors
      </NavLink>
    </div>
  );
};

export default NavBar;
