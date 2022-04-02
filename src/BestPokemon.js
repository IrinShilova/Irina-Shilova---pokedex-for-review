import React from "react";
const RenderListItem = (props) => {
  return <li>{props.ability}</li>;
};

const BestPokemon = () => {
  const abilities = [
    { skill: "Anticipation", id: 556 },
    { skill: "Adaptability", id: 557 },
    { skill: "Run-Away", id: 558 },
  ];
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((abilityObject) => {
          return (
            <RenderListItem
              key={abilityObject.id}
              ability={abilityObject.skill}
            />
          );
        })}\
      </ul>
    </div>
  );
};
export default BestPokemon;
