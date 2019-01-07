import React from 'react';
import Category from './category';
import Search from '../../containers/Search';

import './styles.scss';

function Categories(props) {
  return (
    <div className="Categories">
      <Search/>
      {
        props.categories.map((category, index) => {
          return <Category 
            category={category} 
            key={`category__${index}`}
            handleOpenModal={props.handleOpenModal}
          />
        })
      }
    </div>
  );
}

export default Categories;