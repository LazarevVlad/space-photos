import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Mars from './components/Mars';
import ImagePopup from './components/ImagePopup';
import PageNotFound from './components/PageNotFound';
// import Footer from './components/Footer';


function App() {

  const [selectedCard, setSelectedCard] = useState({
    isOpen: false,
    url: '',
    title: '',
  });

  function handleCardClick(url, title) {
    setSelectedCard({isOpen: true, url, title});
  }
  
  function closePopup() {
    setSelectedCard({isOpen: false, url: '', title: '',});
  }

  return (
    <div className="app global-wrapper">
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Main onCardClick={handleCardClick}/>
        </Route>
        <Route path="/mars">
          <Mars onCardClick={handleCardClick}/>
        </Route>
        <Route path="*">
          <PageNotFound/>
        </Route>
      </Switch>
      {/* <Footer/> */}
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
