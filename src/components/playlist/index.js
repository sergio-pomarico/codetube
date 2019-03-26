import React from 'react';
import Media from '../../containers/Media';

import './styles.scss';

function Playlist(props) {
  const { playlist } = props
  return (
    <div className="Playlist">
      {
        playlist.map((mediaId) => {
          return <Media key={`media__${mediaId}`} id={mediaId} openModal={props.handleOpenModal}/>
        })
      }
    </div>
  );
}

export default Playlist;