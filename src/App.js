import React from "react";
import Hello from "./components/Hello";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <Hello />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
