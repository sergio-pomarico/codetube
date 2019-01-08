import React from 'react';

function Icon(props) {
  const { size, color } = props;
  return (
    <svg 
      width={size}
      height={size}
      fill={color}
      viewBox={`0 0 ${size+10} ${size+10}`}
    >
      {props.children}
    </svg>  
  )
}

export default Icon;