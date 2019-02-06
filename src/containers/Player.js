import React, { Component } from 'react';
import VideoPlayerLayout from '../layouts/VideoPlayerLayout';
import Video from '../components/video';
import Title from '../components/video/title';
import Play from '../components/video/play';
import Timer from '../components/video/timer';
import Controls from '../components/video/controls';
import Progress from '../components/video/progress'

import { formatedTime } from '../utils'

class Player extends Component {
  state = {
    pause: false,
    duration: 0,
    currentTime: 0
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  TogglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  handleLoadedMetadata = (event) => {
    this.video = event.target;
    this.setState({
      durationFormated: formatedTime(this.video.duration),
      duration: this.video.duration
    })
  }

  handleTimeUpdate = (event) => {
    this.setState({
      currentTimeFormated: formatedTime(this.video.currentTime),
      currentTime: this.video.currentTime
    })
  }

  handlerProgressChange = (event) => {
    this.video.currentTime = event.target.value;
  }

  render() {
    return (
      <VideoPlayerLayout>
        <Title title="Titulo del video"/>
        <Video 
          src={"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
        />
        <Controls>
          <Play handleClick={this.TogglePlay} pause={this.state.pause}/>
          <Timer 
            duration={this.state.durationFormated}
            currentTime={this.state.currentTimeFormated}
          />
          <Progress 
            duration={this.state.duration} 
            value={this.state.currentTime}
            handlerProgressChange={this.handlerProgressChange}
          />
        </Controls>
      </VideoPlayerLayout>
    );
  }
}

export default Player;
