import React from 'react';
import './styles.scss';

import { Volumen } from '../../icons';

const VolumeControl = (props) => {
  return (
    <button className="Volume">
      <Volumen size={25} color="white"/>
      <div className="Volume-range">
        <input type="range" min={0} max={1} step={.05} onChange={props.handleVolumeChange}/>
      </div>
    </button>
  )
}

export default VolumeControl;