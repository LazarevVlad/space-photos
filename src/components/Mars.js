import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBarMars from './NavBarMars';
import RoverCuriosity from './RoverCuriosity';
import RoverOpportunity from './RoverOpportunity';
import RoverSpirit from './RoverSpirit';

function Mars(props) {
  const { onCardClick } = props;
  return(
    <div className="mars">
      <BrowserRouter>
        <NavBarMars />
        <Switch>
          <Route path='/mars/curiosity'>
            <RoverCuriosity 
              onCardClick={onCardClick}
            />
          </Route>
          <Route path='/mars/opportunity'>
            <RoverOpportunity 
              onCardClick={onCardClick}
            />
          </Route>
          <Route path='/mars/spirit'>
            <RoverSpirit 
              onCardClick={onCardClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Mars;