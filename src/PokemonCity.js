import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  function handleInputChange(event) {
    setCity(event.target.value);
  }

  return (
    <div>
        <input
        type="text"
        placeholder="Some reminder"
        value={city}
        onChange={handleInputChange}
      />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;