import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBarMars() {
  return (
    <nav className="nav-bar-inner block">
      <NavLink className="nav-bar-inner__item" activeClassName="nav-bar-inner__item_active" exact to="/mars/curiosity">
        Curiosity
      </NavLink>
      <NavLink className="nav-bar-inner__item" activeClassName="nav-bar-inner__item_active" to="/mars/opportunity">
        Opportunity
      </NavLink>
      <NavLink className="nav-bar-inner__item" activeClassName="nav-bar-inner__item_active" to="/mars/spirit">
        Spirit
      </NavLink>
    </nav>
  )
}

export default NavBarMars;