import React from 'react';
import { Route, useRouteMatch, NavLink  } from 'react-router-dom';
import RoverCuriosity from './RoverCuriosity';
import RoverOpportunity from './RoverOpportunity';
import RoverSpirit from './RoverSpirit';

function Mars(props) {
  const { onCardClick } = props;
  const { path, url } = useRouteMatch();
  return(
    <div className="mars">
      <nav className="nav-bar-inner block">
        <NavLink className="nav-bar-inner__item" activeClassName="nav-bar-inner__item_active"  to={`${url}/curiosity`}>
          Curiosity
        </NavLink>
        <NavLink className="nav-bar-inner__item" activeClassName="nav-bar-inner__item_active" to={`${url}/opportunity`}>
          Opportunity
        </NavLink>
        <NavLink className="nav-bar-inner__item" activeClassName="nav-bar-inner__item_active" to={`${url}/spirit`}>
          Spirit
        </NavLink>
      </nav>
        <Route path={`${path}/curiosity`}>
          <RoverCuriosity 
            onCardClick={onCardClick}
          />
        </Route>
        <Route path={`${path}/opportunity`}>
          <RoverOpportunity 
            onCardClick={onCardClick}
          />
        </Route>
        <Route path={`${path}/spirit`}>
          <RoverSpirit 
            onCardClick={onCardClick}
          />
        </Route>
    </div>
  )
}

export default Mars;