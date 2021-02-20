import React from 'react';
import RoverMain from './RoverMain';
import { optionsOpportunity, OpportunityDetails } from '../utils/constants';
import img from '../images/Opportunity.jpg';

function RoverOpportunity(props) {
  const { onCardClick } = props;

  return (
    <>
      <RoverMain
        rover="Opportunity"
        roverPhoto="opportunity"
        onCardClick={onCardClick}
        options={optionsOpportunity}
        img={img}
        info={OpportunityDetails}
      />
    </>
  )
}

export default RoverOpportunity;