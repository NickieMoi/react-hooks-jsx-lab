import React from "react";
const img = screen.queryByAltText("I made this");
import { image } from "../data/data";

function About() {
  return <div>About</div>;
  return (
    <div>
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;