import React, { useState, useEffect } from "react";

function PokemonMoves(props) {
  const [pokemonData, setpokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((res) => res.json())
      .then((data) => setpokemonData(data));
  }, [props.pokemonId]);

  return (
    pokemonData && (
      <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul>
      </div>
    )
  );
}

export default PokemonMoves;
