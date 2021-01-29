import React, { useState } from 'react';
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

function RoverForm(props) {
  const { onUpdatePhotos, options, styles } = props;

  const [selectedOption, setSelectedOption] = useState(null);
  const [sol, setSol] = useState(null)

  function handleAddSol(e) {
    setSol(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdatePhotos(sol, selectedOption.value);
  }

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
    <div className="rover-container block">
      <form 
      className="rover-form"
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