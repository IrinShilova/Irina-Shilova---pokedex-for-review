import React from "react";
import logo from "./016.png";

const Logo = (props) => {
  return (
    <header>
      <h1>"Welcome to the {props.appName}"</h1>
      <img src={logo} alt="cool bird" onClick={props.func} />
    </header>
  );
};

export default Logo;

// Open the pokedex React application and open the Logo.js file.
// Copy and paste the logWhenClicked function from the Logo component to the App component.
// Pass the logWhenClicked function reference as a prop to the Logo component. (Hint: look at the ClickLoggerApp component above for an example).
// In the Logo component change the onClick prop so that it passes props.handleClick. (Hint: look at the FancyButton component above for an example). |
// In a group of 2 - 3 trainees, discuss what you think will happen when you click the logo image now. Can you explain why?
// Report back to the rest of the class what you thought was going to happen and why.