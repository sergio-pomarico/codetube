import React from 'react';
import Media from './media';

import './styles.scss';

function Playlist(props) {
  const { playlist } = props
  return (
    <div className="Playlist">
      {
        playlist.map((item, index) => {
          return <Media {...item} key={`media__${index}`}  openModal={props.handleOpenModal}/>
        })
      }
    </div>
  );
}

export default Playlist;