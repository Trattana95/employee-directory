import React from "react";
// import './App.css';
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search"



function App() {
  return (
    <div className="container">
      <Jumbotron />
      <Search />
      <Card />
    </div>
  );
}

export default App;
