import React, { Component } from 'react';
import Playlist from '../components/playlist/index';
import data from '../api';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Playlist data={data}/>
      </div>
    );
  }
}

export default App;
