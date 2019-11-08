import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt me!"),
  //   React.createElement(Pet, { name: "Oreo", animal: "Dog", breed: "Husky" }),
  //   React.createElement(Pet, { name: "Poop", animal: "Dog", breed: "Labdor" }),
  //   React.createElement(Pet, { name: "Toot", animal: "Dog", breed: "Maltese" })
  // ]);

  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Oreo" animal="Dog" breed="Husky" />
      <Pet name="Poop" animal="Dog" breed="Lab" />
      <Pet name="Toote" animal="Dog" breed="Maltese" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
