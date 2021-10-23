/* eslint-disable import/no-cycle */
import { localStorageMethods } from "./storage";

const projectFactory = (projectInput) => {
  const title = projectInput;
  const info = [];
  return { title, info };
};

const projectMethods = (() => {
  const projectsArray = [];

  function findProject(ProjectTitle) {
    const foundedProject = projectsArray.find(
      (project) => project.title === ProjectTitle,
    );

    return foundedProject;
  }
  function createProject(projectTitle) {
    const newProject = projectFactory(projectTitle);
    projectsArray.push(newProject);
    localStorageMethods.updateLocalStorage();
  }

  return {
    findProject,
    createProject,
    projectsArray,
  };
})();

export { projectFactory, projectMethods };
