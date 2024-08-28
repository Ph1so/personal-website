import React from "react";
import Hello from "./components/Hello";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const images = [
    "/b1.jpg",
    "/b2.jpg",
    "/b4.jpg",
    "/b6.jpg",
    "/b7.jpg",
    "/b8.jpg",
    "/b9.jpg",
    "/b10.jpg",
    "/b11.jpg",
    "/b12.jpg",
    "/b13.jpg",
  ];

  return (
    <div className="app-container">
      <Hello />
      <About images={images} />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
