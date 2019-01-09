import React from 'react';

import './styles.scss';

const Timer = (props) => (
  <div className="Timer">
    <p>
      <span>00 / {props.duration}</span>
    </p>
  </div>
)

export default Timer;