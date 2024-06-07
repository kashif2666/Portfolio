/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          <p>
            Hello! My name is <strong>Md. Kashif Raza Ansari </strong>, and I am
            a dedicated Computer Science and Engineering student with a passion
            for full-stack development. Currently, I am pursuing my graduate
            degree at RVS College of Engineering and Technology, with my
            graduation anticipated in 2024.
          </p>
          <br />
          <p>
            {" "}
            With a strong foundation in the MERN stack (MongoDB, Express.js,
            React, and Node.js), I have developed a variety of web applications
            that demonstrate my ability to create robust and scalable solutions.
            My projects reflect my commitment to staying updated with the latest
            industry trends and technologies, ensuring that I am always equipped
            with the skills needed to tackle complex challenges.
          </p>
          <br />
          <p>
            Feel free to explore my portfolio to see examples of my work, and
            don't hesitate to get in touch if you have any questions or
            opportunities.
          </p>
        </Typography>
        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/kashif2666" target="blank">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/_kashifff.anwar/" target="blank">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/md-kashif-raza-ansari-7a5409269/"
          target="blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://x.com/_kashifff_anwar?t=NMiVY102tsgxNZBQUkQY3A&s=09"
          target="blank"
        >
          <BsTwitterX />
        </a>
      </div>
    </div>
  );
};

export default Footer;
