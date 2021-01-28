import React from 'react';

function Rover(props) {
  const { rover } = props;

  return (
    <div className="rover">
      <p className="rover__landing-date">Landing date: {rover.landingDate}</p>
      <p className="rover__launch-date">Launch date: {rover.launchDate}</p>
      <p className="rover__status">Status: {rover.status}</p>
      <p className="rover__max-sol">Max sol: {rover.maxSol}</p>
      <p className="rover__max-date">Max date: {rover.maxDate}</p>
      <p className="rover__total-photos">Total photos: {rover.totalPhotos}</p>
    </div>
  )
}

export default Rover;