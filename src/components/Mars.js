import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBarMars from './NavBarMars';
import '../scss/styles/mars.scss'

function Mars() {
  return(
    <div className="mars">
      <BrowserRouter>
        <NavBarMars />
        <Switch>
          <Route>

          </Route>
          <Route>

          </Route>
          <Route>

          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Mars;