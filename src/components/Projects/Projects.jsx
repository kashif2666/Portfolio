import React from "react";
import "./Projects.css";
import { Button, Typography } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";

const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="blank">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>
      {isAdmin && (
        <Button
          style={{
            color: "rgba(40,40,40,0.7)",
          }}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = () => {
  const projects = [1, 2, 3];
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects
        <AiOutlineProject className="projectIcon" />
      </Typography>

      <div className="projectWrapper">
        {projects.map((project, index) => (
          <ProjectCard
            url="https://github.com/kashif2666"
            projectImage="https://images.pexels.com/photos/7736057/pexels-photo-7736057.jpeg?auto=compress&cs=tinysrgb&w=600"
            projectTitle="Sample Project"
            description="This is a description of project Loremihhgffgh jihgfjkk oihgvhj joihgfgh"
            technologies="MongoDb NodeJs Express React"
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me. <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
