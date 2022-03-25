import React from "react";

function BestPokemon(props) {
    //const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
    return (
      <div>
        <p>My favourite Pokemon is Squirtle</p>
        <ul>
          {props.abilities.map(e => <li>{e}</li>)}            
        </ul>
      </div>
    );
  }

  export default BestPokemon;