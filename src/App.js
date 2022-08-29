import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: "Becca", lastName: "Biyekenova"},
      company: "ABC"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName} {this.state.name.lastName}, you work at {this.state.company}</p>
          <button
            onClick={() => {
              this.setState({ name: {firstName: "Andrei" , lastName: "Nguen"}});
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
