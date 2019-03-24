import React from 'react';
import Category from './category';
import Search from '../../containers/Search';
import Media from '../../components/playlist/media'

import './styles.scss';

function Categories(props) {
  return (
    <div className="Categories">
      <Search/>
      {
        props.search.length > 0 && 
        <div className="Category">
          <p className="Category-description">Resultados de la busqueda</p>
          <h2 className="Category-title">{props.search.length} coincidencia(s)</h2>
        {
          props.search.map((item, index) => {
          return <Media {...item}  key={`search__${index}`}/>
          })
        }
        </div>
      }
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