import React from "react";
import Wrapper from "../assets/wrappers/Hobbies";

const Hobbies = () => {
  const hobbies = [
    {
      title: "Hiking",
      description: "Exploring nature and enjoying scenic trails.",
    },
    { title: "Photography", description: "Capturing moments and landscapes." },
    {
      title: "Gaming",
      description: "Playing video games to relax and have fun.",
    },
    {
      title: "Cooking",
      description: "Experimenting with recipes and cuisines.",
    },
    {
      title: "Reading",
      description: "Diving into books and expanding knowledge.",
    },
    { title: "Traveling", description: "Discovering new places and cultures." },
  ];

  return (
    <Wrapper>
      <div className="hobbies-header">
        <h2>Hobbies</h2>
        <p>Here are some of my favorite activities and pastimes.</p>
      </div>
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div className="card" key={index}>
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Hobbies;
