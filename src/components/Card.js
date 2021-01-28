import React from 'react';

function Card(props) {
  const { card } = props;

  return (
    <div className="card">
      <div className="card__img-container">
        <img
          src={card.img_src}
          alt={card.camera.full_name}
          className="card__img"
        />
      </div>
      <div className="card__description">
        <p>{card.earth_date}</p>
      </div>
    </div>
  )
}

export default Card;