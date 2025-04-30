import React from "react";
import Wrapper from "../assets/wrappers/ProjectsWrap";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills and projects.",
      github: "https://github.com/yourusername/portfolio",
      details: "/projects/portfolio",
    },
    {
      title: "E-commerce App",
      description:
        "A full-stack e-commerce application with React and Node.js.",
      github: "https://github.com/yourusername/ecommerce-app",
      details: "/projects/ecommerce",
    },
    {
      title: "Task Manager",
      description: "A task management app built with React and Express.",
      github: "https://github.com/yourusername/task-manager",
      details: "/projects/task-manager",
    },
  ];

  return (
    <Wrapper>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-row" key={index}>
            <div className="project-title">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href={project.details}>Details</a>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Projects;
