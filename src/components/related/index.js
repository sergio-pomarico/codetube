import React from 'react';

import './styles.scss';

const Related = (props) => {
  return (
    <div className="List">
      <h2 className="List_title">{props.related.title}</h2>  
      {
        props.related.playlist.map((item, index) => {
          return (
            <div key={`related__${index}`} className="List_item">
              <strong>{item.id}</strong><span>{item.title}</span>
            </div>
          )
        })
      }
    </div>
  );
}

export default Related;