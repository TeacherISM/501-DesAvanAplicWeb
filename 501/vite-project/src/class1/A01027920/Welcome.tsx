import React, { useState, FormEvent } from 'react';
import { Greeting } from './Greetings';

function CatGreeting() {
  const [name, setName] = useState<string>('');
  const [catImageUrl, setCatImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const randomGreeting: string = Greeting(name);
    const width = 350;
    const height = 350;

    setLoading(true);

    const imageUrl = `https://cataas.com/cat/says/${encodeURIComponent(
      randomGreeting
    )}?width=${width}&height=${height}`;

    const response = await fetch(imageUrl);
    if (response.ok) {
      setCatImageUrl(imageUrl);
    } else {
      console.error('Failed to fetch the cat image');
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        backgroundColor: '#606060',
        color: '#00ff00',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <h3
        style={{
          fontSize: '1.5em',
          textShadow: '1px 1px 2px #000000',
          margin: '5px 0', // Reduced margin
        }}
      >
        Welcome
      </h3>
      <form onSubmit={handleSubmit}>
        <label style={{ fontSize: '1em' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{
              backgroundColor: '#303030',
              color: '#00ff00',
              border: '1px solid #00ffff',
              borderRadius: '3px',
              padding: '3px',
              margin: '3px',
              fontSize: '0.9em',
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: '#00ffff',
            color: '#000000',
            border: '1px solid #00ffff',
            borderRadius: '3px',
            padding: '5px 10px',
            margin: '5px',
            fontSize: '1em',
            cursor: 'pointer',
            textShadow: '1px 1px 1px #000000',
          }}
        >
          Recibir saludo
        </button>
      </form>
      {loading ? (
        <p style={{ fontSize: '0.9em' }}>Loading...</p>
      ) : (
        catImageUrl && (
          <img
            src={catImageUrl}
            alt="CatSays"
            style={{ border: '1px solid #00ffff', borderRadius: '3px', maxWidth: '100%' }} // Added maxWidth
          />
        )
      )}
      <br />
      <a
        href="/A01027920/Home.html"
        className="buttonlink"
        style={{
          color: '#00ffff',
          textDecoration: 'none',
          fontSize: '1em',
          padding: '5px 10px',
          margin: '5px',
          border: '1px solid #00ffff',
          borderRadius: '3px',
          display: 'inline-block',
          textShadow: '1px 1px 1px #000000',
        }}
      >
        Regresar a menu
      </a>
    </div>
  );
}

export default CatGreeting;
