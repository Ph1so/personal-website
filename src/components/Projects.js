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
      <div className="project">
        <div className="project-images">
          <img src="./IMG_9959.jpg" alt="centrifuge" className="project-img" />
          <img src="./IMG_9972.jpg" alt="lh" className="project-img" />
        </div>
        <div className="project-content">
          <div className="project-title">PyLabRobot</div>
          <div className="project-description">
            PyLabRobot is an open-source lab automation project at the MIT Media
            Lab. Here, my main focus is reverse-engineering the Agilent
            Centrifuge from Agilent Technologies and developing a Python library
            to control the centrifuge. I also work on adding new features and
            fixing bugs.
          </div>
          <a
            href="https://github.com/PyLabRobot"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <DiGithubBadge size={50} />
          </a>
        </div>
      </div>
      <div className="project">
        <div className="project-images">
          <img
            src="./accuracy score.png"
            alt="accscore"
            className="project-img"
          />
        </div>
        <div className="project-content">
          <div className="project-title">Symptoms Disease Classification</div>
          <div className="project-description">
            In this project, I built a machine learning model to classify
            diseases based on given symptoms, achieving 99.4% accuracy using
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
            className="github-link"
          >
            <DiGithubBadge size={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
