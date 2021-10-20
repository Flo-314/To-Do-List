import { projectMethods,projectFactory } from "./projects.js";
import { itemFactory,itemMethods } from "./items.js";

const mainMethods = (() => {
  function deleteMain() {
    const main = document.querySelector("main");
    main.innerHTML = "";
  }

  function createMainBody() {
    const main = document.querySelector("main");

    const mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main-content");

    const mainTitle = document.createElement("div");
    mainTitle.setAttribute("id", "main-title");

    const mainContainer = document.createElement("div");
    mainContainer.setAttribute("id", "item-container");

    main.append(mainContent, mainTitle, mainContainer);
  }

  function printMain(title) {
    const main = document.querySelector("main");
    deleteMain();
    createMainBody();
    const mainTitle = document.querySelector("#main-title");
    mainTitle.textContent = title;
    domItemMethods.printArray(title);
    promptMethods.createItemBtn();
  }

  return { printMain, deleteMain };
})();

const sidebarMethods = (() => {
  function addListener(projectTitle) {
    const project = document.querySelector("." + projectTitle);

    project.addEventListener("click", () => {
      mainMethods.printMain(projectTitle);
    });
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
      projectDom.printNewProject(projectTitle);
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

const projectDom = (() => {
  function printNewProject(projectTitle) {
    const projectList = document.querySelector("#projectsList");
    const project = document.createElement("li");
    project.classList.add("project");
    project.textContent = projectTitle;
    project.addEventListener("click", () => {
      mainMethods.printMain(projectTitle);
    });

    projectList.appendChild(project);
  }
  function printStoredProjects() {}
  return { printStoredProjects, printNewProject };
})();

const promptMethods = (() => {
  function createItemBtn() {
    const main = document.querySelector("main");
    const itemBtn = document.createElement("button");
    itemBtn.textContent = "Add New Task!";
    itemBtn.setAttribute("id", "itemBtn");
    itemBtn.addEventListener("click", () => itemPrompt());

    main.appendChild(itemBtn);
  }

  function removeItemPromp() {
    const itemContainer = document.querySelector(".addItemContainer");
    itemContainer.remove();
  }

  function itemPrompt() {
    const itemBtn = document.querySelector("#itemBtn");
    itemBtn.remove();

    const addItemContainer = document.createElement("div");
    addItemContainer.classList.add("addItemContainer");

    const itemTitle = document.createElement("input");
    itemTitle.type = "text";
    itemTitle.placeholder = "Task Title";
    itemTitle.classList.add("itemTitle");

    const itemDescription = document.createElement("input");
    itemDescription.type = "text";
    itemDescription.placeholder = "Description";
    itemDescription.classList.add("itemDescription");

    const dueDate = document.createElement("input");
    dueDate.type = "date";

    const sumbitBtn = document.createElement("button");
    sumbitBtn.textContent = "Add new Task!";

    sumbitBtn.addEventListener("click", () => {
      let descriptionValue = itemDescription.value;
      let titleValue = itemTitle.value;
      let dueDateValue = dueDate.value;

      itemMethods.createItem(titleValue, descriptionValue, dueDateValue);
      domItemMethods.printItem(titleValue, descriptionValue, dueDateValue);
      removeItemPromp();
      createItemBtn();
    });

    const main = document.querySelector("main");
    addItemContainer.append(itemTitle, itemDescription, dueDate, sumbitBtn);
    main.append(addItemContainer);
  }
  return { createItemBtn };
})();

const domItemMethods = (() => {
  function printArray(title) {
    let project = projectMethods.findProject(title);

    if (project !== undefined) {
      project.info.forEach((element) => {
        printItem(element.title, element.description, element.dueDate);
      });
    }
  }
  function printItem(title, description, duedate, checklist) {
    const itemContainer = document.querySelector("#item-container");
    const item = document.createElement("div");
    item.classList.add("item");
    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left-container");
    const itemTitle = document.createElement("div");
    itemTitle.classList.add("item-title");
    const itemDescription = document.createElement("div");
    itemDescription.classList.add("item-description");
    const rightContainer = document.createElement("div");
    rightContainer.classList.add("right-container");
    const itemCheckList = document.createElement("div");
    itemCheckList.classList.add("item-checklist");
    const itemDueDate = document.createElement("div");
    itemDueDate.classList.add("item-duedate");
    const hr = document.createElement("hr");

    itemTitle.textContent = title;
    itemDescription.textContent = description;
    itemDueDate.textContent = duedate;

    leftContainer.append(itemTitle, itemDescription);
    rightContainer.append(itemCheckList, itemDueDate);
    item.append(leftContainer, rightContainer, hr);
    itemContainer.appendChild(item);
  }

  function expandItem() {}
  return { printArray, printItem };
})();

export {
  mainMethods,
  sidebarMethods,
  projectMethods,
  promptMethods,
  domItemMethods,
};