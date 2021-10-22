import { localStorageMethods } from "./storage.js";

const projectFactory = (projectInput) => {
  let title = projectInput;
  let info = [];
  return { title, info };
};

const projectMethods = (() => {
  let projectsArray =  [
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
    console.log(projectsArray)
    localStorageMethods.updateLocalStorage()
  }
  function sliceProject(){
    projectsArray = projectsArray.slice(999)
    console.log(projectsArray)
  }

  return { findProject, createProject, projectsArray, sliceProject};
})();

export { projectFactory, projectMethods };
