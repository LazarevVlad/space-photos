import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Mars from './components/Mars';
import ImagePopup from './components/ImagePopup';


function App() {

  const [selectedCard, setSelectedCard] = useState({
    isOpen: false,
    url: '',
    title: '',
  });

  function handleCardClick(url, title) {
    // const { url, title } = card;
    setSelectedCard({isOpen: true, url, title});
  }
  
  function closePopup() {
    setSelectedCard({isOpen: false, url: '', title: '',});
  }

  return (
    <div className="app global-wrapper">
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Main onCardClick={handleCardClick}/>
        </Route>
        <Route path="/mars">
          <Mars onCardClick={handleCardClick}/>
        </Route>
      </Switch>
    </BrowserRouter>

    <ImagePopup
      isOpen={selectedCard.isOpen}
      url={selectedCard.url}
      title={selectedCard.title}
      onClose={closePopup}
    />
    </div>
  );
}

export default App;
