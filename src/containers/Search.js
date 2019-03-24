import React,{ Component } from 'react';
import { connect } from 'react-redux';

import SearchImput from '../components/search';

class Search extends Component {
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ 
      type: 'SEARCH_VIDEO', 
      payload: { query: this.input.value }
    });
  }

  setInputRef = (element) => {
    this.input = element
  }

  render() {
    return (
      <SearchImput 
        placeholder="Busca tu video favorito..." 
        handleSubmit={this.handleSubmit}
        setRef={this.setInputRef}
      />
    )
  } 
}

export default connect()(Search);