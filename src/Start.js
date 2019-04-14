import React from 'react';

const Start = (props) => (
  <div>
    <button onClick={props.buttonPressed}>{props.buttonText}</button>
  </div>
)

export default Start;