import { useState } from "react";
import classes from "./addproject.module.css";
import Button from "./button";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function valuetext(value) {
  return `${value}°C`;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function AddProject({
  handleClose,
  handleIsTrue,
  addProjectData,
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectCost, setProjectCost] = useState(0);
  const [projectProfit, setProjectProfit] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    handleIsTrue();

    // Create a JSON object to store the entered values
    const projectData = {
      name: projectName,
      cost: projectCost,
      profit: projectProfit,
    };
    addProjectData(projectData); // Call the prop function to add project data

    // Clear input fields and show success notification
    setProjectName("");
    setProjectCost(0);
    setProjectProfit(0);
    toast.success("Project added successfully!", {
      position: "top-right",
    });
  };

  const handleClick = () => {
    handleClose();
    setShowPopup(false);
  };

  return (
    <div className={classes.container}>
      <h1>Add Project</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Project Name"
          variant="outlined"
          placeholder="Enter Project Name"
          required
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <label className={classes.label}>Select project cost</label>
        <Box sx={{ width: "100%" }}>
          <Slider
            aria-label="budget cost"
            defaultValue={0}
            getAriaValueText={valuetext}
            color="secondary"
            valueLabelDisplay="auto"
            min={0} // Minimum value
            max={1000} // Maximum value
            value={projectCost}
            onChange={(event, newValue) => setProjectCost(newValue)}
          />
        </Box>
        <label className={classes.label}>Select project profit</label>
        <Box sx={{ width: "100%" }}>
          <Slider
            aria-label="budget profit"
            defaultValue={0}
            getAriaValueText={valuetext}
            color="secondary"
            valueLabelDisplay="auto"
            min={0} // Minimum value
            max={1000} // Maximum value
            value={projectProfit}
            onChange={(event, newValue) => setProjectProfit(newValue)}
          />
        </Box>
        <div className={classes.btn}>
          <Button text="Add Project" />
          <Button text="Finish" onClick={handleClick} />
        </div>
      </form>
      {showPopup && (
        <div>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <p style={{ fontSize: "16px", textAlign: "center" }}>
                Do you want to add another project
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "3rem",
                  marginTop: "2rem",
                }}
              >
                <Button text="Yes" onClick={() => setShowPopup(false)} />
                <Button text="NO" onClick={handleClick} />
              </div>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
}
