import React, { Component } from 'react';

import './styles.scss';

class Video extends Component {
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.pause !== this.props.pause) {
      this.togglePlay();
    } 
  }

  togglePlay = () => {
    if (this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }

  setRef = (element) => {
    this.video = element;
  }

  render () {
    const { handleLoadedMetadata, handleTimeUpdate, handleSeeking, handleSeeked } = this.props;
    return (
      <div className="Video">
        <video 
          autoPlay={this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking} //On init loading
          onSeeked={handleSeeked} //On finish load
        />
      </div>
    )
  }
}

export default Video;