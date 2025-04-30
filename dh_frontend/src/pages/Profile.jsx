import React, { useEffect } from "react";
import Interests from "./Interests";
import Resume from "./Resume";
import Landing from "./Landing";
import Wrapper from "../assets/wrappers/LandingPage";
import Projects from "./Projects";
import Contact from "./Contact";

const Profile = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper>
      <section id="about" className="hidden">
        <Landing />
      </section>
      <section id="resume" className="hidden">
        <Resume />
      </section>
      <section id="interests" className="hidden">
        <Interests />
      </section>
      <section id="projects" className="hidden">
        <Projects />
      </section>
      <section id="contact" className="hidden">
        <Contact />
      </section>
    </Wrapper>
  );
};

export default Profile;
