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
  }
  return { findProject, createProject };
})();

export { projectFactory, projectMethods };
