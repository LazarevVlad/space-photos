import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/styles/nav-bar-inner.scss'

function NavBarMars() {
  return (
    <nav className="nav-bar-inner">
      <NavLink className="nav-bar-inner__item" activeClassName="nav-bar-inner__item_active" exact to="/curiosity">
        Curiosity
      </NavLink>
      <NavLink className="nav-bar-inner__item" activeClassName="nav-bar-inner__item_active" to="/opportunity">
        Opportunity
      </NavLink>
      <NavLink className="nav-bar-inner__item" activeClassName="nav-bar-inner__item_active" to="/spirit">
        Spirit
      </NavLink>
    </nav>
  )
}

export default NavBarMars;