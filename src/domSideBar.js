/* eslint-disable import/no-cycle */
import { projectMethods } from "./projects";
import { mainMethods, printItemMethods } from "./domMain";

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
    const project = projectMethods.findProject(title);

    if (project !== undefined) {
      project.info.forEach((element) => {
        printItemMethods.printItem(
          element.title,
          element.description,
          element.dueDate,
          element.checklist,
        );
      });
    }
  }

  function printStoredProjects() {
    const projects = projectMethods.projectsArray;
    projects.forEach((project) => {
      if (
        project.title !== "Home"
        && project.title !== "Week"
        && project.title !== "Today"
      ) {
        printProject(project.title);
      }
    });
  }

  return { printProjectInMain, printStoredProjects, printProject };
})();

const sidebarMethods = (() => {
  function addListener(projectTitle) {
    const project = document.querySelector(`.${projectTitle}`);
    switch (projectTitle) {
      case "Home":
        project.addEventListener("click", () => {
          mainMethods.printMainHome();
        });
        break;
      case "Today":
        project.addEventListener("click", () => {
          mainMethods.printMainToday();
        });

        break;
      case "Week":
        project.addEventListener("click", () => {
          mainMethods.printMainWeek();
        });
        break;
      default:
        project.addEventListener("click", () => {
          mainMethods.printMain(projectTitle);
        });
        break;
    }
  }
  function removeProjectPromp() {
    const addProjectContainer = document.querySelector(".addProjectContainer");
    addProjectContainer.remove();
  }
  function createProjectBtn() {
    const projects = document.querySelector("#projects");
    const projectBtn = document.createElement("button");

    projectBtn.textContent = "Add New Project";
    projectBtn.setAttribute("id", "newProjectBtn");
    // eslint-disable-next-line no-use-before-define
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
    projectInput.required = true;
    projectInput.min = "1";

    const sumbitProjectBtn = document.createElement("button");
    sumbitProjectBtn.classList.add("sumbitProjectBtn");
    sumbitProjectBtn.textContent = "Sumbit Project";

    sumbitProjectBtn.addEventListener("click", () => {
      if (projectInput.checkValidity()) {
        const projectTitle = projectInput.value;
        projectMethods.createProject(projectTitle);
        removeProjectPromp();
        createProjectBtn();
        domProjectMethods.printProject(projectTitle);
      } else {
        prompt("Please, write a project Title. Tanks.", "Please, write a project title. Tanks.");
      }
    });

    addProjectContainer.append(projectInput, sumbitProjectBtn);
    projects.appendChild(addProjectContainer);
  }

  addListener("Home");
  addListener("Today");
  addListener("Week");
  createProjectBtn();

  return { addListener };
})();

export { sidebarMethods, domProjectMethods };
