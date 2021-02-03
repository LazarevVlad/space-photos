import React from 'react';
import RoverMain from './RoverMain';
import { optionsCuriosity } from '../utils/constants';

function RoverCuriosity(props) {
  const { onCardClick } = props;

  return (
    <>
      <RoverMain
        rover="Curiosity"
        roverPhoto="curiosity"
        onCardClick={onCardClick}
        options={optionsCuriosity}
      />
    </>
  )
}

export default RoverCuriosity;