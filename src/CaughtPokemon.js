

import React from "react";

const CaughtPokemon = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Caught {props.caught.length} Pokemon on {props.date}
      </p>
      <button onClick={props.func}>Catch Pokemon</button>
      <ul>
        {props.caught.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;