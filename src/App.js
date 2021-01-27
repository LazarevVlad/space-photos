import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Select from 'react-select';
import Header from './components/Header';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Mars from './components/Mars';
import './scss/styles/app.scss';

const options = [
  { value: 'FHAZ', label: 'Front Hazard Avoidance Camera' },
  { value: 'RHAZ', label: 'Rear Hazard Avoidance Camera' },
]

function CustomSelect() {
  const [selectedOption, setSelectedOption] = useState(null);
  
  return (
    <div className="select">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App global-wrapper">
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <CustomSelect/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/mars">
          <Mars/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
