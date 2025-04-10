import React from 'react';
import { Song } from '../data.tsx';

interface MusicItemProps {
  song: Song;
  onSelect: (song: Song) => void;
}

const MusicItem: React.FC<MusicItemProps> = ({ song, onSelect }) => {
  const { title, artist } = song;
  
  return (
    <li 
      onClick={() => onSelect(song)}
    >
      {`🎵 ${title} - ${artist}`}
    </li>
  );
};

export default MusicItem;
