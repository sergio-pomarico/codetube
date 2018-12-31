import React from 'react';
import Category from './category';

import './styles.scss';

function Categories(props) {
  const categories = props.data.categories;
  return (
    <div className="Categories">
      {
        categories.map((category, index) => {
          return <Category category={category} key={`category__${index}`}/>
        })
      }
    </div>
  );
}

export default Categories;