import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CardFromRover from './CardFromRover';
import api from '../utils/Api';
import { customStyles } from '../utils/constants';


function RoverMain(props) {
  const { rover, roverPhoto, onCardClick, options } = props;

  const [roverInfo, setRoverInfo] = useState({
    landingDate: '',
    launchDate: '',
    status: '',
    maxSol: '',
    maxDate: '',
    totalPhotos: '',
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [sol, setSol] = useState(null);
  const [cards, setCards] = useState([]);
  const useStyles = makeStyles({
    root: {
      width: '100%',
      fontFamily: 'Space Mono',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '16px',
    }
  });
  const classes = useStyles();

  function handleGetPhotos(roverPhoto, sol, camera) {
    api.getPhotoFromRover(roverPhoto, sol, camera)
    .then((res) => {
      setCards(res.photos);
    })
    .catch((err) => console.log(`Ошибка ${err}`));
  }

  function handleAddSol(e) {
    setSol(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleGetPhotos(roverPhoto, sol, selectedOption.value);
  }

  useEffect(() => {
    api.getRoverInfo(rover)
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

  return (
    <div className="rover block">

      <ul className="rover__list">
        <li className="rover__item">Landing date: {roverInfo.landingDate}</li>
        <li className="rover__item">Launch date: {roverInfo.launchDate}</li>
        <li className="rover__item">Status: {roverInfo.status}</li>
        <li className="rover__item">Max sol: {roverInfo.maxSol}</li>
        <li className="rover__item">Max date: {roverInfo.maxDate}</li>
        <li className="rover__item">Total photos: {roverInfo.totalPhotos}</li>
      </ul>

      <form 
      className="rover__form"
      onSubmit={handleSubmit}
      >
        <TextField
          id="sol"
          label='sol'
          onChange={handleAddSol}
          className={classes.root}
        />
        <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder='Select camera'
        styles={customStyles}
        />
        <button className="button rover-form__button">Загрузить</button>
      </form>
      <div className="photo-grid">
        {cards.map((card) => 
          <CardFromRover
            card={card}
            key={card.id}
            onCardClick={onCardClick}
          />
        )}
      </div>
    </div>
  ) 
}

export default RoverMain;