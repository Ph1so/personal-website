import React from "react";
import Hello from "./components/Hello";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css"; // assuming you have a CSS file for styling

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
