import React, { Component } from 'react';

import './styles.scss';


class Video extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.pause !== this.props.pause) {
      
    } 
  }
  render () {
    return (
      <div className="Video">
        <video 
          autoPlay={this.props.autoplay}
          src={this.props.src}
        />
      </div>
    )
  }
}

export default Video;