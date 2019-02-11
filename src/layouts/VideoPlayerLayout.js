import React from 'react';

const VideoPlayerLayout = (props) => {
  return (
    <div style={VideoPlayer}
      ref={props.setRef}  
    >
      {props.children}
    </div>
  );
}

const VideoPlayer = {
  width: '100%',
  position: 'relative',
  background: 'black',
}

export default VideoPlayerLayout;