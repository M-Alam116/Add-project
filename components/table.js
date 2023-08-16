import { useState } from "react";
import { addProject, projectData } from "./projectData";
import AddProject from "./AddProject";
import Button from "./button";
import classes from "./table.module.css";

export default function Table({ handleIsTrue }) {
  const [popup, setPopup] = useState(false);
  // const [projectData, setProjectData] = useState([]);

  const handleOpen = () => {
    setPopup(true);
  };

  const handleClose = () => {
    setPopup(false);
  };

  // const addProjectData = (data) => {
  //   setProjectData([...projectData, data]);
  // };
  const addProjectData = (data) => {
    addProject(data);
  };

  const btn = {
    display: "flex",
    margin: "2rem auto",
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h4>Project Title</h4>
        <h4>Project Cost</h4>
        <h4>Project Profit</h4>
      </div>
      {/* Render the project data */}
      {projectData.map((project, index) => (
        <div key={index} className={classes.details}>
          <span>{project.name}</span>
          <span>${project.cost}</span>
          <span>${project.profit}</span>
        </div>
      ))}
      <Button text="Add another Project" style={btn} onClick={handleOpen} />
      {popup && (
        <AddProject
          handleClose={handleClose}
          handleIsTrue={handleIsTrue}
          addProjectData={addProjectData}
        />
      )}
    </div>
  );
}
