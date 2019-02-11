import React, { Component } from 'react';
import VideoPlayerLayout from '../layouts/VideoPlayerLayout';
import Video from '../components/video';
import Title from '../components/video/title';
import Play from '../components/video/play';
import Timer from '../components/video/timer';
import Controls from '../components/video/controls';
import Progress from '../components/video/progress';
import Spinner from '../components/video/spinner';
import Volume from '../components/video/volume';
import FullScreen from '../components/video/fullscreen'

import { formatedTime } from '../utils'

class Player extends Component {
  state = {
    pause: false,
    duration: 0,
    currentTime: 0,
    loading: false,
    maxVolume: true
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

  handleSeeking = () => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = () => {
    this.setState({
      loading: false
    })
  }

  handleVolumeChange = (event) => {
    this.video.volume = event.target.value;
  }

  handleFullScreenClick = (event) => {
    if(!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen()
    }else{
      document.webkitExitFullscreen();
    }
  }

  setRef = element => {
    this.player = element
  }

  render() {
    return (
      <VideoPlayerLayout  setRef={this.setRef}>
        <Title title={this.props.title}/>
        <Video 
          src={this.props.src}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
        <Spinner active={this.state.loading}/>
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
          <Volume handleVolumeChange={this.handleVolumeChange}/>
          <FullScreen handleFullScreenClick={this.handleFullScreenClick}/>
        </Controls>
      </VideoPlayerLayout>
    );
  }
}

export default Player;
