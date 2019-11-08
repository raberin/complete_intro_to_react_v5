import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, { name: "Oreo", animal: "Dog", breed: "Husky" }),
    React.createElement(Pet, { name: "Poop", animal: "Dog", breed: "Labdor" }),
    React.createElement(Pet, { name: "Toot", animal: "Dog", breed: "Maltese" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
