import React from "react";
import "./App.scss";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Designers from "./components/Designers";
function App() {
  return (
    <>
      <Cursor />
      <Header />
      <Hero />
      <Designers />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;