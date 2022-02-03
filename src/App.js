import React from "react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import About from "./About";
import { GlobalStyle } from "./GlobalStyle";
import Homepage from "./Home";
import Projects from "./Projects";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Homepage />
      <Projects />
      <About />
    </Router>
  );
};

export default App;
