import React from 'react';

import './styles.scss';

const Progress = (props) => (
  <div className="Progress">
    <input 
      type="range"
      min={0}
      max={props.duration}
      value={props.value}
      onChange={props.handlerProgressChange}
    />
  </div>
)

export default Progress;