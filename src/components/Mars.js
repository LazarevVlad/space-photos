import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBarMars from './NavBarMars';
import RoverCuriosity from './RoverCuriosity';
import RoverOpportunity from './RoverOpportunity';
import RoverSpirit from './RoverSpirit';

function Mars() {
  return(
    <div className="mars">
      <BrowserRouter>
        <NavBarMars />
        <Switch>
          <Route path='/mars/curiosity'>
            <RoverCuriosity/>
          </Route>
          <Route path='/mars/opportunity'>
            <RoverOpportunity/>
          </Route>
          <Route path='/mars/spirit'>
            <RoverSpirit/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Mars;