import React, { useState } from 'react';
import Select from 'react-select';

function RoverForm(props) {
  const { onUpdatePhotos, options } = props;

  const [selectedOption, setSelectedOption] = useState(null);
  const [sol, setSol] = useState(null)

  function handleAddSol(e) {
    setSol(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdatePhotos(sol, selectedOption.value);
  }

  return (
    <>
      <form 
      className="rover-form"
      onSubmit={handleSubmit}
      >
        <input 
          id="sol"
          name="sol"
          type="number"
          className="rover-form__input"
          placeholder="sol"
          required
          onChange={handleAddSol}
        />
        <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder='Select camera'
      />
      <button className="button rover-form__button">Загрузить</button>
      </form>
    </>
  ) 
}

export default RoverForm;