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
  addNinja = ninja => {
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  };
  deleteNinja = name => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.name !== name;
    });
    console.log(ninjas);
  };
  render() {
    return (
      <div className="App">
        <h1>Ninja List</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
