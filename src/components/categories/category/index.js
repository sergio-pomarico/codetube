import React from 'react';
import Playlist from '../../playlist';

import './styles.scss';

function Category(props) {
  const { category } = props;
  return (
    <div className="Category">
      <p className="Category-description">{category.description}</p>
      <h2 className="Category-title">{category.title}</h2>
      <Playlist playlist={category.playlist} handleOpenModal={props.handleOpenModal}/>
    </div>
  );
}

export default Category;