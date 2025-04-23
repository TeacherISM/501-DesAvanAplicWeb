import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import kahootMusic from '../../../assets/kahoot.mp3';
import BackToMenu from '../../class3/A01799073/components/BackMenu';
import '../../../styles/guessGame.css';

const frases = [
  'SUELTENME!!!!!',
  'Ya me quiero ir',
  'Hoy vamos a rumbear o no?',
  'Wacho, eres malisimo',
  'La mejor bebida del cine es el Ice de Venom',
  'Wukong',
  'Mezcal o Vodka',
  'Ya se necesitan unas vacaciones y dormir',
  'Vete a dormir',
  'Medicate, por favor'
];

const GuessGame: React.FC = () => {
  const [randomPhrase, setRandomPhrase] = useState('');
  const [guess, setGuess] = useState<'corta' | 'larga' | ''>('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    setRandomPhrase(fraseAleatoria);
  }, []);
  
  const countWords = (str: string) => str.trim().split(/\s+/).length;

  const checkGuess = () => {
    const length = countWords(randomPhrase);
    const actual = length > 5 ? 'larga' : 'corta';

    if (guess === actual) {
        setFeedback('¡Correcto! Redirigiendo... 🎉');
        setTimeout(() => {
            navigate('/video');
        }, 3000);
    } else {
        setFeedback(`GG F, la frase era ${actual}. ¡Intenta de nuevo!`);
    }
  };

  return (
    <div className="game-container">
        <h1>Selecciona el tamaño de la frase</h1>
        <h2>🎲 Corta o Larga?</h2>
        <p><strong>Frase:</strong></p>
        <blockquote>{randomPhrase}</blockquote>

        <div className="options">
            <button onClick={() => setGuess('corta')}>corta</button>
            <button onClick={() => setGuess('larga')}>larga</button>
        </div>
        <button onClick={checkGuess}>Verificar</button>

        {feedback && <p className="feedback">{feedback}</p>}

        <audio autoPlay loop>
            <source src={kahootMusic} type="audio/mpeg" />
            WOWO, Tu navegador no soporta audio!!
        </audio>

        <BackToMenu/>

    </div>
  );
};

export default GuessGame;
