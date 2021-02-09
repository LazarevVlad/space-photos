import React from 'react';

function CardFromMars(props) {
  const { card, onCardClick } = props;

  function handleCardClick() {
    onCardClick(card.img_src, card.camera.full_name)
  }

  return (
    <div className="card-rover">
      <div className="card-rover__img-container">
        <img
          className="card-rover__img"
          src={card.img_src}
          alt={card.camera.full_name}
          onClick={handleCardClick}
        />
      </div>
      <div className="card-rover__description">
        <p>{card.earth_date}</p>
      </div>
    </div>
  )
}

export default CardFromMars;