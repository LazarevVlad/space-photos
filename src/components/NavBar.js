import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/styles/nav-bar.scss';

function NavBar() {

  return(
    <nav className="nav-bar">
      <NavLink className="nav-bar__item" activeClassName="nav-bar__item_active" exact to="/">
        Home
      </NavLink>
      <NavLink className="nav-bar__item" activeClassName="nav-bar__item_active" to="/mars">
        Mars
      </NavLink>
    </nav>
  )
}

export default NavBar;