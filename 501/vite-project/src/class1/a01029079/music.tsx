import React from 'react';
import MusicList from './components/musicList';
import { Song } from './data';

const Music: React.FC = () => {

  const handleSelectSong = (song: Song): void => {
    alert(`Ahora reproduciendo: ${song.title} de ${song.artist}`);
  };

  return (
    <div>
      <h1>Música Favorita de Andrés</h1>
      <a href="../../../../../src/class3/a01029079/public/menu.html" className='btn'> Return </a>
      <MusicList onSelectSong={handleSelectSong} />
    </div>
  );
};

export default Music;