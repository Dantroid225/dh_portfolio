import React from "react";
import Wrapper from "../assets/wrappers/Resume";

const Resume = () => {
  return (
    <Wrapper>
      <div className="resume-header">
        <h2>Resume</h2>
        <p>Below is a summary of my professional experience and skills.</p>
      </div>
      <div className="resume-content">
        {/* Experience Section */}
        <div className="resume-column">
          <h3>Experience</h3>
          <div className="job-item">
            <h4>Lead Application Engineering Developer</h4>
            <p>Higher Logic, Saratoga Springs, NY (11/22 – 4/25)</p>
            <ul>
              <li>
                Spearheaded implementation of more robust processes for
                documentation, monitoring, and complex ticket resolution.
              </li>
              <li>
                Developed and enhanced support-facing tools to streamline issue
                resolution, minimizing escalations and improving overall
                efficiency.
              </li>
              <li>Team leadership through one-on-one coaching.</li>
            </ul>
          </div>
          <div className="job-item">
            <h4>Senior Application Engineering Developer</h4>
            <p>Higher Logic (4/22 – 10/22)</p>
            <ul>
              <li>Training and onboarding of new APPENG team members.</li>
              <li>
                Updated and developed code to resolve bugs and implement new
                features.
              </li>
              <li>
                Supported the coordination and optimization of internal team
                communication to enhance collaboration and workflow efficiency.
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-column">
          <h3>Skills</h3>
          <div className="job-item">
            <h4>Tools & Environments</h4>
            <ul>
              <li>Bitbucket</li>
              <li>Confluence</li>
              <li>DataDog</li>
              <li>GitHub/GitHub Copilot</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>
          <div className="job-item">
            <h4>Programming and Scripting</h4>
            <ul>
              <li>C#</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="job-item">
            <h4>Web & Backend Development</h4>
            <ul>
              <li>React/Express</li>
              <li>Node.js</li>
              <li>.Net</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Resume;
