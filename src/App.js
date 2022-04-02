import React, { useState } from "react";
import Logo from "./Logo.js";
import BestPokemon from "./BestPokemon.js";
import CaughtPokemon from "./CaughtPokemon.js";
import PokemonNames from "./PokemonNames.json";
import PokemonMovesSelector from "./PokemonMovesSelector.js";
import PokemonCity from "./PokemonCity.js";

function App() {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    setCaught(
      caught.concat(
        PokemonNames[Math.floor(Math.random() * PokemonNames.length)]
      )
    );
  }

  return (
    <div className="App">
      <Logo appName={"Pokedex"} func={catchPokemon} />
      <BestPokemon />
      <CaughtPokemon
        date={new Date().toLocaleDateString()}
        func={catchPokemon}
        caught={caught}
      />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;

// Open the pokedex React application and open the CaughtPokemon.js file.
// Change the useState to be initialised to an empty array ([])
// There will now be a bug in your app! We don't see how many Pokemon we have caught. Discuss with another trainee what you think the problem is.
// Change the JSX to instead render caught.length. Does this fix the bug?
// Let's now show the names of the Pokemon we have caught. Render a <ul> element within the component. Then use the map method to loop through each item in the caught array and render it in an <li> element.
// Change the catchPokemon function to add a new Pokemon (it doesn't matter which one) onto the caught array. (Hint: use the concat method.)
