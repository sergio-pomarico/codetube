import React from 'react';
import './styles.scss';

const Spinner = (props) => {
  if (!props.active) return null
  return (
    <div className="Spinner">
      <div className="radar-spinner">
        <div className="circle">
          <div className="circle-inner-container">
            <div className="circle-inner"></div>
          </div>
        </div>
        <div className="circle">
          <div className="circle-inner-container">
            <div className="circle-inner"></div>
          </div>
        </div>
        <div className="circle">
          <div className="circle-inner-container">
            <div className="circle-inner"></div>
          </div>
        </div>
        <div className="circle">
          <div className="circle-inner-container">
            <div className="circle-inner"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spinner;