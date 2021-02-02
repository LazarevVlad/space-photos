import React, { useState, useEffect } from "react";
import Pictures from "./Pictures";
import api from '../utils/Api';

function Main(props) {
  const { onCardClick } = props;

  const [img, setImg] = useState({
    src: '',
    alt: 'Ошибка',
    text: ''
  })

  useEffect(() => {
    api.getPictureOfTheDay()
    .then((res) => {
      setImg({
        src: res.url,
        alt: res.title,
        text: res.explanation
      })
    })
    .catch((err) => console.log(`Ошибка ${err}`))
  }, [])

  return(
    <div className="main">
      <p className="main__title">Astronomy Picture of the Day</p>
      <div className="main__img-container">
        <img
          className="main__img"
          alt={img.alt}
          src={img.src}
        />
      </div>
      <p className="main__text">{img.text}</p>
      <Pictures
        onCardClick={onCardClick}
      />
    </div>
  )
}

export default Main;