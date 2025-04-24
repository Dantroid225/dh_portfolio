import React from "react";
import Wrapper from "../assets/wrappers/Profile";

const Profile = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <h1>Profile</h1>
          <p>Welcome to your profile page!</p>
        </div>
        <div className="img-container">
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
