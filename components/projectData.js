// projectData.js

export let projectData = [];

export function addProject(newProject) {
  projectData.push(newProject);
}

export function getProjectData() {
  return projectData;
}
