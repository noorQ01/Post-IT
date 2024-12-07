import React from "react";
import userImage from "../Images/user.png";

const About = () => {
  return (
    <div>
      <h1>About this project</h1>
      <p>This project is developed by: Noor Said Qatna.</p>
      <p>Email: 42S19177@utas.edu.om</p>
      <img src={userImage} alt="devImage" className="userImage" />
      <button>Contact Developer</button>
    </div>
  );
};

export default About;
