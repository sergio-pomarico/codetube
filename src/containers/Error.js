import React, { Component } from 'react';

import ErrorMessage from '../components/error'

class Error extends Component {
  
  state = {
    handleError: false
  }

  componentDidCatch(error, info){
    this.setState({
      handleError: true
    })
  }

  render() {
    if(this.state.handleError) {
      return(
        <ErrorMessage />
      );
    }
    return this.props.children;
  }
}

export default Error;
