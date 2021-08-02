import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import About from "./Pages/about";
import Menu from "./Pages/menu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("I resized");
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.addEventListener("resize", hideMenu);
    };
  });
  return (
    <div className="App">
      <header className="App-header"></header>
      <Navbar toogle={toogle} />
      <Dropdown isOpen={isOpen} toogle={toogle} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

// const element = document.querySelector("#test");
// let i = 0;

// const interval = setInterval(() => {
//   if (i > 1) {
//     clearInterval(interval);
//     return;
//   }
//   element.innerText = text[i].toUpperCase();
//   i++;
// }, 1000)
