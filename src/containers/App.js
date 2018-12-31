import React, { Component } from 'react';
import Media from '../components/media';
import data from '../api';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Media title="Que es bitcoin" author="sergio pomarico" cover="./img/bitcoin.jpg"/>
      </div>
    );
  }
}

export default App;
