import React from "react";
import { useState } from "react";
import { currentProjects } from "../../data/currentprojects";
import "../../styles/components/CurrentProjects.css";

function CurrentProjects() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handelToggle(index) {
    setIsExpanded(isExpanded === index ? null : index);
  }
  return (
    <>
      <section
        id="current-research-projects"
        className="current-projects-section"
      >
        <h2 className="section-title">Current Projects</h2>
        <ul className="projects-grid">
          {currentProjects.map((project, index) => (
            <li key={index} className={isExpanded === index ? "expanded" : ""}>
              <div
                className="project-card-container"
                onClick={() => handelToggle(index)}
              >
                <img
                  src={project.image}
                  alt="Project image"
                  className="project-card-image"
                />
                <div className="project-card-title">{project.title}</div>
                <div className="project-summary">
                  <p>{project.summary}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default CurrentProjects;
