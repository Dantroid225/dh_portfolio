import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setShowLinks(false); // Close the menu on smaller screens
    }
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <a className="logo">Daniel Hill.</a>
        <ul className={`nav-links ${showLinks ? "show" : ""}`}>
          <li>
            <button className="nav-link" onClick={() => handleScroll("about")}>
              About
            </button>
          </li>
          <li>
            <button className="nav-link" onClick={() => handleScroll("resume")}>
              Resume
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => handleScroll("interests")}
            >
              Interests
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => handleScroll("projects")}
            >
              Projects
            </button>
          </li>

          <li>
            <button
              className="nav-link"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
        <button className="toggle-btn" onClick={toggleLinks}>
          ☰
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
