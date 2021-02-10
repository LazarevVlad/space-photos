import React, { useState, useEffect } from "react";
import Pictures from "./Pictures";
import api from '../utils/Api';
import { regExpImg } from '../utils/constants';


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

  let cardTemplate;

  if (regExpImg.test(img.src)) {
    cardTemplate = <div className="main__img-container">
    <img
      className="main__img"
      alt={img.alt}
      src={img.src}
    />
  </div>
  } else {
    cardTemplate = <div className="main__iframe-container">
      <iframe
        src={img.src}
        className="main__iframe"
        allow="fullscreen"
      />
      <a href={img.src}>Link</a>
    </div>
  }

  return(
    <div className="main">
      <p className="main__title">Astronomy Picture of the Day</p>
      {cardTemplate}
      <p className="main__text">{img.text}</p>
      <Pictures
        onCardClick={onCardClick}
      />
    </div>
  )
}

export default Main;