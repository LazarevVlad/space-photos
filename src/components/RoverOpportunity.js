import React from 'react';
import RoverMain from './RoverMain';
import { optionsOpportunity } from '../utils/constants';

function RoverOpportunity(props) {
  const { onCardClick } = props;


  return (
    <>
      <RoverMain
        rover="Opportunity"
        roverPhoto="opportunity"
        onCardClick={onCardClick}
        options={optionsOpportunity}
      />
    </>
  )
}

export default RoverOpportunity;