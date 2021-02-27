import React, { useState } from 'react';

function CardFromRover(props) {
  const { card, onCardClick } = props;

  const [isLiked, setIsLiked] = useState(false);

  function handleCardClick() {
    onCardClick(card.img_src, card.id)
  }

  function handleCardLike() {
    setIsLiked(!isLiked);
  }
  console.log(card)
  return (
    <div className="card-rover">
      <div className="card-rover__img-container">
        <img
          className="card-rover__img"
          src={card.img_src}
          alt={card.id}
          onClick={handleCardClick}
        />
      </div>
      <div className="card-rover__footer">
        <p className="card-rover__date">{card.earth_date}</p>
        <button className={`card-rover__button button-like ${isLiked ? 'button-like_active': ''}`}
          onClick={handleCardLike}
        ></button>
      </div>
    </div>
  )
}

export default CardFromRover;