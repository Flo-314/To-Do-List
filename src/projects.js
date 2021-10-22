import { localStorageMethods } from "./storage.js";

const projectFactory = (projectInput) => {
  let title = projectInput;
  let info = [];
  return { title, info };
};

const projectMethods = (() => {
  let projectsArray = [
    {
      title: "Home",
      info: [],
    },
    {
      title: "Today",
      info: [],
    },
    {
      title: "Week",
      info: [],
    },
    {
      title: "TEste 1 ",
      info: [],
    },
    {
      title: "teste 2 ",
      info: [],
    },
  ];

  function findProject(ProjectTitle) {
    let project = projectsArray.find(
      (project) => project.title === ProjectTitle
    );

    return project;
  }
  function createProject(projectTitle) {
    let newProject = projectFactory(projectTitle);
    projectsArray.push(newProject);
    localStorageMethods.updateLocalStorage()
  }
  return { findProject, createProject, projectsArray };
})();

export { projectFactory, projectMethods };
