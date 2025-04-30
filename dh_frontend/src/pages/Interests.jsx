import React from "react";
import Wrapper from "../assets/wrappers/Interests";

const Interests = () => {
  const interests = [
    { title: "Art", description: "Capturing moments and landscapes." },
    {
      title: "Gaming",
      description: "Playing video games to relax and have fun.",
    },
    {
      title: "Hiking",
      description: "Exploring nature and enjoying scenic trails.",
    },
    {
      title: "Animation",
      description: "Experimenting with recipes and cuisines.",
    },
    {
      title: "Film",
      description: "Diving into books and expanding knowledge.",
    },
    { title: "Traveling", description: "Discovering new places and cultures." },
  ];

  return (
    <Wrapper>
      <div className="interests-header">
        <h2>Interests</h2>
        <p>Here are some of my favorite activities and pastimes.</p>
      </div>
      <div className="interests-grid">
        {interests.map((hobby, index) => (
          <div className="card" key={index}>
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Interests;
