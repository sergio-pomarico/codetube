import React from 'react';
import './styles.scss';

import { FullScreen } from '../../icons';

const FullScreenControl = (props) => {
  return (
    <div 
      className="FullScreen" 
      onClick={props.handleFullScreenClick}
    >
      <FullScreen size={25} color="white"/>
    </div>
  )
}

export default FullScreenControl