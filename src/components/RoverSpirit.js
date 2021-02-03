import React from 'react';
import RoverMain from './RoverMain';
import { optionsSpirit } from '../utils/constants';

function RoverSpirit(props) {
  const { onCardClick } = props;

  return (
    <>
      <RoverMain
        rover="Spirit"
        roverPhoto="spirit"
        onCardClick={onCardClick}
        options={optionsSpirit}
      />
    </>
  )
}

export default RoverSpirit;