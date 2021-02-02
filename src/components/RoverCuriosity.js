import React, {useState, useEffect} from 'react';
import Rover from './Rover';
import api from '../utils/Api';
import RoverForm from './RoverForm';
import CardFromRover from './CardFromRover';
import { optionsCuriosity, customStyles } from '../utils/constants';

function RoverCuriosity(props) {
  const { onCardClick } = props;

  const [roverInfo, setRoverInfo] = useState({
    landingDate: '',
    launchDate: '',
    status: '',
    maxSol: '',
    maxDate: '',
    totalPhotos: '',
  });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getRoverInfo('Curiosity')
    .then((res) => {
      setRoverInfo({
        landingDate: res.photo_manifest.landing_date,
        launchDate: res.photo_manifest.launch_date,
        status: res.photo_manifest.status,
        maxSol: res.photo_manifest.max_sol,
        maxDate: res.photo_manifest.max_date,
        totalPhotos: res.photo_manifest.total_photos,
      })
    })
    .catch((err) => console.log(`Ошибка ${err}`));
  }, [])

  function handleGetPhotos(sol, camera) {
    api.getPhotoFromRover('curiosity', sol, camera)
    .then((res) => {
      setCards(res.photos);
    })
    .catch((err) => console.log(`Ошибка ${err}`));
  }

  return (
    <>
      <Rover
        rover={roverInfo}
      />
      <RoverForm
        options={optionsCuriosity}
        onUpdatePhotos={handleGetPhotos}
        styles={customStyles}
      />
      <div className="photo-grid">
        {cards.map((card) => 
          <CardFromRover
            card={card}
            key={card.id}
            onCardClick={onCardClick}
          />
        )}
      </div>
    </>
  )
}

export default RoverCuriosity;