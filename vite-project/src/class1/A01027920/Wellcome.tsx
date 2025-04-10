import React, { useState, FormEvent } from 'react';
import { Greeting } from './Greetings';

function CatGreeting() {
  const [name, setName] = useState<string>('');
  const [catImageUrl, setCatImageUrl] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const randomGreeting: string = Greeting(name);

    const width = 400;
    const height = 400;

    setCatImageUrl(
        `https://cataas.com/cat/says/${encodeURIComponent(randomGreeting)}?width=${width}&height=${height}`
    );
};

  return (
    <>
      <h1>Wellcome</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre?
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Recibir saludo</button>
      </form>

      <img src={catImageUrl} alt="CatSays" />
      
      <br></br>
      <a href='/A01027920/Home.html' className='buttonlink'>Regresar a menu</a>
    </>
  );
}

export default CatGreeting;
