import React, {useState, useEffect} from 'react';
import Rover from './Rover';
import api from '../utils/Api';
import RoverForm from './RoverForm';
import Card from './Card';
import { optionsSpirit } from '../utils/constants';

function RoverSpirit(props) {
  const {} = props;

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
    api.getRoverInfo('Spirit')
    .then((res) => {
      console.log(res)
      setRoverInfo({
        landingDate: res.photo_manifest.landing_date,
        launchDate: res.photo_manifest.launch_date,
        status: res.photo_manifest.status,
        maxSol: res.photo_manifest.max_sol,
        maxDate: res.photo_manifest.max_date,
        totalPhotos: res.photo_manifest.total_photos,
      })
    })
  }, [])

  function handleGetPhotos(sol, camera) {
    api.getPhotoFromRover('spirit', sol, camera)
    .then((res) => {
      console.log(res.photos)
      setCards(res.photos)
    })
  }

  return (
    <>
      <Rover
        rover={roverInfo}
      />
      <RoverForm
        options={optionsSpirit}
        onUpdatePhotos={handleGetPhotos}
      />
      <div className="photo-grid">
        {cards.map((card) => 
          <Card
            card={card}
            key={card.id}
          />
        )}
      </div>
    </>
  )
}

export default RoverSpirit;