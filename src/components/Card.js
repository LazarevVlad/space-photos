import React from 'react';

function Card(props) {
  const { card, onCardClick } = props;

  function handleCardClick() {
    onCardClick(card.url, card.title)
  }

  return  (
    <div className="card">
      <div className="card__img-container">
        <img 
          className="card__img"
          src={card.url}
          alt={card.title}
          onClick={handleCardClick}
        />
      </div>
      <div className="card__description">
        <p className="card__text">{card.explanation}</p>
        <p className="card__date">{card.date}</p>
      </div>
    </div>
  )
}

export default Card;