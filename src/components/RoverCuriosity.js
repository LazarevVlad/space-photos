import React from 'react';
import RoverMain from './RoverMain';
import { optionsCuriosity, curiosityDetails } from '../utils/constants';
import img from '../images/Curiosity.jpg';

function RoverCuriosity(props) {
  const { onCardClick } = props;

  return (
    <>
      <RoverMain
        rover="Curiosity"
        roverPhoto="curiosity"
        onCardClick={onCardClick}
        options={optionsCuriosity}
        img={img}
        info={curiosityDetails}
      />
    </>
  )
}

export default RoverCuriosity;