import React, { Component } from "react";
import "./App.css";
import Ninjas from "./ninja";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black" },
      { name: "Yoshi", age: 20, belt: "green" },
      { name: "Crystal", age: 25, belt: "pink" }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Ninja List</h1>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
