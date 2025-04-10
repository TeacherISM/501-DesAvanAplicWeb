import React from 'react';
import MusicItem from './musicItem.tsx';
import { songs, Song } from '../data';

interface MusicListProps {
  onSelectSong: (song: Song) => void;
}

const MusicList: React.FC<MusicListProps> = ({ onSelectSong }) => {
  return (
    <ul>
      {songs.map(song => (
        <MusicItem key={song.id} song={song} onSelect={onSelectSong} />
      ))}
    </ul>
  );
};

export default MusicList;