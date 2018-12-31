import React from 'react';
import Media from './media';

import './styles.scss';

function Playlist(props) {
  const { playlist } = props
  return (
    <div className="Playlist">
      {
        playlist.map((item, index) => {
          return <Media {...item} key={`media__${index}`}/>
        })
      }
    </div>
  );
}

export default Playlist;