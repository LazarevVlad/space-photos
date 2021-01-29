import React from 'react';

function Rover(props) {
  const { rover } = props;

  return (
    <div className="rover block">
      <div className="rover__info">
        <p className="rover__text">Landing date: {rover.landingDate}</p>
        <p className="rover__text">Launch date: {rover.launchDate}</p>
        <p className="rover__text">Status: {rover.status}</p>
        <p className="rover__text">Max sol: {rover.maxSol}</p>
        <p className="rover__text">Max date: {rover.maxDate}</p>
        <p className="rover__text">Total photos: {rover.totalPhotos}</p>
      </div>
    </div>
  )
}

export default Rover;