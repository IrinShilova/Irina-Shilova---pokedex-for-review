import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

//appName="Pokedex";
//const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];



const mentors = ["Ali", "Sub", "Loic", "Anthony", "Lucy", "Mozart"];

function MentorsList() {
  
  
  
  return (
    <ul>
      {mentors.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}


function App() {
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon abilities = {['Anticipation', 'Adaptability', 'Run-Away']} />       //... or here
      <CaughtPokemon date = {new Date().toLocaleDateString()} />
      <MentorsList />

    </div>
  );
}

export default App;
