import React from 'react';
import RoverMain from './RoverMain';
import { optionsSpirit, SpiritDetails } from '../utils/constants';
import img from '../images/Spirit.jpg';

function RoverSpirit(props) {
  const { onCardClick } = props;

  return (
    <>
      <RoverMain
        rover="Spirit"
        roverPhoto="spirit"
        onCardClick={onCardClick}
        options={optionsSpirit}
        img={img}
        info={SpiritDetails}
      />
    </>
  )
}

export default RoverSpirit;