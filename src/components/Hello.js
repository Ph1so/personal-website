import React from "react";
import "./Hello.css";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Hello = () => {
  return (
    <div className="hello-container">
      <div className="pfp-container">
        <div className="hello">
          <TypeAnimation
            sequence={[
              "Hello",
              400,
              "Hello,",
              200,
              "Hello, I",
              400,
              "Hello, I'm",
              700,
              "Hello, I'm ",
              400,
              "Hello, I'm Phi.",
              // 2500,
              // "",
              // 1750,
            ]}
            speed={225}
            className="type-animation"
            repeat={0}
          />
        </div>
        <div className="description">
          I'm a student and software developer based in Boston, MA.
        </div>
        <div className="icons-container">
          <a
            href="https://github.com/Ph1so"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiGithubBadge className="icon github-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/phi-nguyen-64b170230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon linkedin-icon" />
          </a>
          <a href="mailto:phiwe3296@gmail.com">
            <MdEmail className="icon email-icon" />
          </a>
        </div>
      </div>
      <img src="./IMG_6919.jpg" alt="Phi" className="img" />
    </div>
  );
};

export default Hello;
