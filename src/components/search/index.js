import React from 'react';

import './styles.scss';

const Search = (props) => (
  <form className="Search" onSubmit={props.handleSubmit}>
    <input 
      type="text"
      className="Search-input"
      name="search"
      placeholder={props.placeholder}
      ref={props.setRef}
    />
  </form>
)

export default Search;