import React from "react";
//import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import dhPic from "../assets/images/dh_pic.png";

const Landing = () => {
  return (
    <Wrapper>
      <div className="projects">
        <div className="content">
          <h4>Hi! I'm Daniel,</h4>
          <h2>
            a seasoned technical professional specializing in software
            operations, application development, and SaaS implementation.
          </h2>
        </div>
        <div className="image-container">
          <img src={dhPic} alt="Profile" className="main-img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
