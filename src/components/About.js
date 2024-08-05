import React from "react";
import { image } from "../data/data.js";

function About() {
  return <div id="about">
  <h2>About Me</h2>
  <p>I am creative</p>
  <img src={image} alt="I made this" />
  </div>;

}

export default About;
