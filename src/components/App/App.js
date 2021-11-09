import "./App.css";
import React from "react";

import Nav from "../Nav/nav";

import Food from "../Food/food";

function App() {
  return (
    <div className="App">
      <a href="/">
        <h2>Recommend To Becky</h2>
      </a>
      <Nav />
      {/* <Food /> */}
    </div>
  );
}

export default App;
