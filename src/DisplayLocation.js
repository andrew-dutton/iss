import React from 'react';
import CurrentLocation from './CurrentLocation';

const DisplayLocation = (props) => (
  <div>
    {props.buttonPressed && <CurrentLocation />}
  </div>
);

export default DisplayLocation;