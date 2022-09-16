import { useState } from "react";
import Project from "../Project/Project";
import "./Skill.css";
import Button from "../UI/Button";

const Skills = (props) => {
  const [projects, setProjects] = useState(false);

  const setProjectHandler = () => {
    setProjects(true);
    console.log(projects);
  };

  // const buttonClicked = (isClicked) => {
  //   console.log(isClicked);
  //   setProjects(isClicked);
  //   console.log({ projects });
  // };

  return (
    <div className="webd">
      {projects && <Project onClose={projects} />}
      <h1> Web Development Tech Stack </h1>
      <h2> Languages: {props.language} </h2>
      <h2> Frameworks: {props.framework} </h2>
      <button
        onClick={() => {
          setProjectHandler();
        }}
      >
        Projects{" "}
      </button>
    </div>
  );
};

export default Skills;
