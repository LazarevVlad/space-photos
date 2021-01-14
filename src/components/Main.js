import React ,{ useState, useEffect } from "react";
import api from '../utils/Api';
import '../scss/styles/main.scss';

function Main() {
  // const {} = props;

  const [img, setImg] = useState({
    src: '',
    alt: 'Ошибка',
  })

  useEffect(() => {
    api.getPictureOfTheDay()
    .then((res) => {
      setImg({
        src: res.url,
        alt: res.title
      })
    })
    .catch((err) => console.log(`Ошибка ${err}`))
  })

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
    </div>
  )
}

export default Main;