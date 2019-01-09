import React from 'react';
import './styles.scss';

function Controls(props) {
  return (
    <div className="Controls">
      {props.children}
    </div>
  )
}

export default Controls
