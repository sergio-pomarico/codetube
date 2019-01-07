import React,{ Component } from 'react';

import SearchImput from '../components/search';

class Search extends Component {
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.input.value)
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

export default Search;