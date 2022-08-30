import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [{ name: "Becca" }, { name: "Andrei" }, { name: "Kyle" }],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, index) => {
          return (
            <div key={index}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
