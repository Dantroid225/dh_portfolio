import React from "react";
//import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import dhPic from "../assets/images/dh_pic.png";

const Landing = () => {
  return (
    <Wrapper>
      <div className="projects">
        <div className="content">
          <h2>Daniel Hill</h2>
          <h1>Software Engineer</h1>
        </div>
        <div className="image-container">
          <img src={dhPic} alt="Profile" className="main-img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
