import React from "react";
import Nav from "./Nav";
import Pigs from "./Pigs"

import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Pigs hogs={hogs}></Pigs>
    </div>
  );
}

export default App;