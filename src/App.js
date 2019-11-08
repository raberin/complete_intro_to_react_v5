const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, { name: "Oreo", animal: "Dog", breed: "Husky" }),
    React.createElement(Pet, { name: "Poop", animal: "Dog", breed: "Lab" }),
    React.createElement(Pet, { name: "Toot", animal: "Dog", breed: "Maltese" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
