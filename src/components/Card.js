import React from 'react';
import { regExpImg } from '../utils/constants';

function Card(props) {
  const { card, onCardClick } = props;
  function handleCardClick() {
    onCardClick(card.url, card.title)
  }

  let cardTemplate;

  if (regExpImg.test(card.url)) {
    cardTemplate = <div className="card__img-container">
    <img 
      className="card__img"
      src={card.url}
      alt={card.title}
      onClick={handleCardClick}
    />
  </div>
  } else {
    cardTemplate = <div className="card__iframe-container">
      <iframe
        src={card.url}
        className="card__iframe"
        allow="fullscreen"
      />
      <a href={card.url}>Link</a>
    </div>
  }

  return  (
    <div className="card">
      {cardTemplate}
      <div className="card__description">
        <p className="card__text">{card.explanation}</p>
        <p className="card__date">{card.date}</p>
      </div>
    </div>
  )
}

export default Card;