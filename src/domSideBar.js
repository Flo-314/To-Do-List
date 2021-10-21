import { projectMethods } from "./projects.js";
import { mainMethods, promptMethods, domItemMethods } from "./domMain.js";

const sidebarMethods = (() => {
  function addListener(projectTitle) {
    const project = document.querySelector("." + projectTitle);
    if (projectTitle !== "Home") {
      project.addEventListener("click", () => {
        mainMethods.printMain(projectTitle);
      });
    } else {
      project.addEventListener("click", () => {
        mainMethods.printMainHome();
      });
    }
  }

  function createProjectBtn() {
    const projects = document.querySelector("#projects");
    const projectBtn = document.createElement("button");

    projectBtn.textContent = "Add New Project";
    projectBtn.setAttribute("id", "newProjectBtn");
    projectBtn.addEventListener("click", () => projectPromp());

    projects.appendChild(projectBtn);
  }

  function projectPromp() {
    const projectBtn = document.querySelector("#newProjectBtn");
    projectBtn.remove();

    const projects = document.querySelector("#projects");

    const addProjectContainer = document.createElement("div");
    addProjectContainer.classList.add("addProjectContainer");

    const projectInput = document.createElement("input");
    projectInput.type = "text";
    projectInput.placeholder = "Project Title";
    projectInput.classList.add("projectInput");

    const sumbitProjectBtn = document.createElement("button");
    sumbitProjectBtn.classList.add("sumbitProjectBtn");
    sumbitProjectBtn.textContent = "Sumbit Project";

    sumbitProjectBtn.addEventListener("click", () => {
      let projectTitle = projectInput.value;
      projectMethods.createProject(projectTitle);
      removeProjectPromp();
      createProjectBtn();
      domProjectMethods.printProject(projectTitle);
    });

    addProjectContainer.append(projectInput, sumbitProjectBtn);
    projects.appendChild(addProjectContainer);
  }

  function removeProjectPromp() {
    const addProjectContainer = document.querySelector(".addProjectContainer");
    addProjectContainer.remove();
  }

  addListener("Home");
  addListener("Today");
  addListener("Week");
  createProjectBtn();

  return { addListener };
})();

const domProjectMethods = (() => {
  function printProject(projectTitle) {
    const projectList = document.querySelector("#projectsList");
    const project = document.createElement("li");
    project.classList.add("project");
    project.textContent = projectTitle;
    project.addEventListener("click", () => {
      mainMethods.printMain(projectTitle);
    });

    projectList.appendChild(project);
  }
  function printProjectInMain(title) {
    let project = projectMethods.findProject(title);

    if (project !== undefined) {
      project.info.forEach((element) => {
        domItemMethods.printItem(
          element.title,
          element.description,
          element.dueDate
        );
      });
    }
  }

  function printStoredProjects() {
    let projects = projectMethods.projectsArray;
    projects.forEach((project) => {
      if (
        project.title !== "Home" &&
        project.title !== "Week" &&
        project.title !== "Today"
      )
        printProject(project.title);
    });
  }

  return { printProjectInMain, printStoredProjects, printProject };
})();

export { sidebarMethods, domProjectMethods };
