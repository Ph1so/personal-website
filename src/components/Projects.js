import React from "react";
import "./Projects.css";
import { DiGithubBadge } from "react-icons/di";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-title">Projects</div>
      <div className="projects-description">
        Explore some of the exciting projects I've been working on! These
        projects highlight a few of my skills in software development and AI/ML.
        Additionally, you'll find some more details on my contributions to
        PyLabRobot.
      </div>
      <div className="project1">
        <div className="project1-images">
          <img src="./logo.png" alt="PyLabRobot" className="project1-img1" />
          <img
            src="./IMG_9959.jpg"
            alt="centrifuge"
            className="project1-img2"
          />
        </div>
        <div className="project1-container">
          <div className="project1-title">PyLabRobot</div>
          <div className="project1-description">
            PyLabRobot is an open-source lab automation project at the MIT Media
            Lab. My work revolves around reverse-engineering the Agilent
            Centrifuge from Agilent Technologies. I focus on the software side
            of the project, developing a Python library to control the
            centrifuge. When needed, I also work on fixing bugs and adding new
            features.
          </div>
          <a
            href="https://github.com/PyLabRobot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiGithubBadge size={50} color="black" />
          </a>
        </div>
      </div>
      <div className="project2">
        <div className="project2-images">
          <img
            src="./accuracy score.png"
            alt="accscore"
            className="project2-img1"
          />
        </div>
        <div className="project2-container">
          <div className="project2-title">Symptoms Disease Classification</div>
          <div className="project2-description">
            In this project, I built a machine learning model to classify
            diseases based on given symptoms, acheiving 99.4% accuracy using
            Decision Trees. The steps I took included data preprocessing, model
            selection and training, and model evaluation using several
            performance assessment metrics. For future improvements, I plan to
            create an app that can handle user inputs, which will communicate
            with the trained model to get predictions.
          </div>
          <a
            href="https://github.com/Ph1so/Symptoms-Disease-Classification"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiGithubBadge size={50} color="black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
