import React from "react";
import "./About.css";
import { Typography } from "@mui/material";
const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>
          Writing code is like composing poetry; every line has a purpose, every
          function a rhythm.
        </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src="https://github.com/kashif2666/Portfolio/blob/main/src/Images/WhatsApp%20Image%202024-06-07%20at%2016.58.15.jpeg?raw=true"
            alt="Kashif"
            className="aboutAvtar"
          />
          <Typography
            variant="h4"
            style={{
              margin: "1vmax 0",
              color: "black",
            }}
          >
            Md Kashif Raza Ansari
          </Typography>
          <Typography>Full Stack Developer</Typography>
          <Typography
            style={{
              margin: "1vmax 0",
            }}
          >
            I am a Student
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            I am Md Kashif Raza Ansari, a computer science and engineering
            student at RVS College of Engineering and Technology. I aim to
            become a full stack developer with a focus on the MERN stack.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
