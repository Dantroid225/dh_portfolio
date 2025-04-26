import React from "react";
import Hobbies from "./Hobbies";
import Resume from "./Resume";
import Landing from "./Landing";
import Wrapper from "../assets/wrappers/LandingPage";

const Profile = () => {
  return (
    <Wrapper>
      <Landing />
      <Resume />
      <Hobbies />
    </Wrapper>
  );
};

export default Profile;
