import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

function RoverForm(props) {
  const { onUpdatePhotos, options, styles } = props;

  const [roverInfo, setRoverInfo] = useState({
    landingDate: '',
    launchDate: '',
    status: '',
    maxSol: '',
    maxDate: '',
    totalPhotos: '',
  });

  const [selectedOption, setSelectedOption] = useState(null);
  const [sol, setSol] = useState(null)

  function handleAddSol(e) {
    setSol(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdatePhotos(sol, selectedOption.value);
  }

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

  const useStyles = makeStyles({
    root: {
      width: '100%',
      fontFamily: 'Space Mono',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '16px',
    }
  })

  const classes = useStyles();

  return (
    <div className="rover block">

      <div className="rover__info">
        <p className="rover__text">Landing date: {roverInfo.landingDate}</p>
        <p className="rover__text">Launch date: {roverInfo.launchDate}</p>
        <p className="rover__text">Status: {roverInfo.status}</p>
        <p className="rover__text">Max sol: {roverInfo.maxSol}</p>
        <p className="rover__text">Max date: {roverInfo.maxDate}</p>
        <p className="rover__text">Total photos: {roverInfo.totalPhotos}</p>
      </div>

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
        styles={styles}
        />
        <button className="button rover-form__button">Загрузить</button>
      </form>
    </div>
  ) 
}

export default RoverForm;