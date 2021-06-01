import React from 'react';
import RoverMain from './RoverMain';
import { optionsPerseverance, perseveranceDetails } from '../utils/constants';
import img from '../images/Curiosity.jpg';

function RoverPerseverance(props) {
  const { onCardClick } = props;

  return (
    <>
      <RoverMain
        rover="Perseverance"
        roverPhoto="perseverance"
        onCardClick={onCardClick}
        options={optionsPerseverance}
        img={img}
        info={perseveranceDetails}
      />
    </>
  )
}

export default RoverPerseverance;