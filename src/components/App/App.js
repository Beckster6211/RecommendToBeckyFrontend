import "./App.css";
import React from "react";

import Nav from "../Nav/nav";
import Header from "../Header/header";

import Food from "../Food/food";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      {/* <Food /> */}
    </div>
  );
}

export default App;
