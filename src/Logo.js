import React from "react";


function Logo(props) {
    console.log(props);
    return (
    <header>
      <h1> {props.appName}</h1>
      <img alt="bird" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" ></img>
    </header>
    );
  }

  export default Logo;