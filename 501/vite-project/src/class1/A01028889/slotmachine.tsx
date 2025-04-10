import React, { useState } from 'react';
import './Styles/slotmachine.css';

const symbolsList = ['🍒', '💎', '🍀'];

const getSymbols = (symbols: string[]): string[] => {
  const randomSymbols = [...symbols, ...symbols, ...symbols].sort(() => Math.random() - 0.5);
  return randomSymbols.slice(0, 3);
};

const SlotMachine: React.FC = () => {
  const [currentSymbols, setCurrentSymbols] = useState<string[]>([]);
  const [win, setWin] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDogImage = async () => {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();
      setImageUrl(data.message);
    } catch (error) {
      console.error('Error: ', error);
      setImageUrl(null);
    }
  };

  const spin = async () => {
    setLoading(true);
    const newSymbols = getSymbols(symbolsList);
    setCurrentSymbols(newSymbols);

    const isWin = newSymbols[0] === newSymbols[1] && newSymbols[1] === newSymbols[2];
    setWin(isWin);

    await fetchDogImage();
    setLoading(false);
  };

  return (
    <div className="slot-machine">
      <h1 className="slot-machine-title">Slot Machine</h1>
      <div className="slot-machine-symbols">
        {currentSymbols.length > 0 ? (
          currentSymbols.map((symbol, index) => (
            <span key={index} className="slot-machine-symbol">
              {symbol}
            </span>
          ))
        ) : (
          <p className="slot-machine-message">Press "Spin" to start!</p>
        )}
      </div>
      <button className="slot-machine-button" onClick={spin} disabled={loading}>
        {loading ? 'Spinning...' : 'Spin'}
      </button>

      {imageUrl && (
        <div className="slot-machine-image">
          <p className={`slot-machine-result ${win ? 'win' : 'lose'}`}>
            {win ? '🎉 You won!' : '😢 Didn`t win, but you got a doggy photo:'}
          </p>
          <img src={imageUrl} alt="Random dog" className="dog-image" />
        </div>
      )}
    </div>
  );
};

export default SlotMachine;
