import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-title">About Me</div>
      <div className="about-description">
        I'm currently a student at{" "}
        <span className="red">University of Massachusetts Lowell</span> pursuing
        a B.S. in Computer Science. On weekends I'm a Software Developer Intern
        at the <span className="red">MIT Media Lab</span> where I work on
        PyLabRobot. I'm passionate about software engineering and I enjoy
        learning AI/ML during my free-time. When I'm not coding, I'm a 3D artist
        on Blender.
      </div>
    </div>
  );
};

export default About;
