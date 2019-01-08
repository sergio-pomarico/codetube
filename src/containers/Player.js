import React, { Component } from 'react';
import VideoPlayerLayout from '../layouts/VideoPlayerLayout';
import Video from '../components/video';
import Title from '../components/video/title';
import Play from '../components/video/play';

class Player extends Component {
  state = {
    pause: true
  }

  componentDidMount() {
    this.setState({
      pause: (!this.state.autoplay)
    })
  }

  TogglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title title="Titulo del video"/>
        <Video 
          src={"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"}
          autoplay={this.props.autoplay}
          pause={this.props.pause}
        />
        <Play handleClick={this.TogglePlay} pause={this.state.pause}/>
      </VideoPlayerLayout>
    );
  }
}

export default Player;
