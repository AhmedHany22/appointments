import React, { Component } from "react";
import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App-header px-2">
        <div className="App mt-20 font-thin">
          <h1 className="text-5xl font-bold underline header">
            <BiCalendar className="inline-block text-red-400 align-center" />
            All Appointments
          </h1>
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
