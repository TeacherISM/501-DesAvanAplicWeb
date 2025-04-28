import { useState } from 'react';

const Arrow = () => {
  const [pokemon, setPokemon] = useState<{ name: string; url: string } | null>(null);

  const total_pokemons = 500;

  const getRandom = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const fetchPokemonData = (id: number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const name = data.name;
        const url = data.sprites.other.dream_world.front_default;
        if (name && url) {
          setPokemon({ name, url });
        }
      });
  };

  const displayPokemonCard = () => {
    const id = getRandom(1, total_pokemons);
    fetchPokemonData(id);
  };

  return (
    <div>
      <a href="http://localhost:5173/index.html" className="back-button">Back Home</a>
      <button onClick={displayPokemonCard}>Get Random Pokémon</button>
      <div id="showcase" className="showcase">
        {pokemon && (
          <div className="card">
            <img src={pokemon.url} alt={pokemon.name} />
            <br />
            <br />
            <label><b>{pokemon.name.toUpperCase()}</b></label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Arrow;
