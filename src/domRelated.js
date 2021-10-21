import { projectMethods, projectFactory } from "./projects.js";
import { itemFactory, itemMethods } from "./items.js";

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
    deleteMain();
    createMainBody();
    const mainTitle = document.querySelector("#main-title");
    mainTitle.textContent = title;
    domProjectMethods.printProjectInMain(title);
    promptMethods.createItemBtn();
  }
  function printMainHome() {
    deleteMain();
    createMainBody();
    const mainTitle = document.querySelector("#main-title");
    mainTitle.textContent = "Home";
    domItemMethods.printHomeItems();
    promptMethods.createItemBtn();
  }
  return { printMain, deleteMain, printMainHome };
})();

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
  function printHomeItems() {
    let homeArray = projectMethods.projectsArray;
    homeArray.forEach((project) => {
      let projectItems = project.info;

      projectItems.forEach((item) => {
        printItem(item.title, item.description, item.dueDate);
      });
    });
  }

  function printItem(title, description, duedate, checklist) {
    const projectTitle = document.querySelector("#main-title").textContent;
    const itemContainer = document.querySelector("#item-container");
    const item = document.createElement("div");
    item.classList.add("item");

    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left-container");

    const itemTitle = document.createElement("div");
    itemTitle.classList.add("item-title");
    itemTitle.textContent = title;

    const itemDescription = document.createElement("div");
    itemDescription.classList.add("item-description");
    itemDescription.textContent = description;

    const rightContainer = document.createElement("div");
    rightContainer.classList.add("right-container");

    const checklistItem = document.createElement("div");
    checklistItem.classList.add("item-checklist");
    if (checklist !== "checked") {
      checklistItem.classList.add("unchecked");
      checklistItem.addEventListener("click", () => {
        checkboxOffListener(checklistItem, title, projectTitle);
      });
    } else {
      checklistItem.classList.add("checked");
      checkboxOnListener(checklistItem, title, projectTitle);
    }

    const itemDueDate = document.createElement("div");
    itemDueDate.classList.add("item-duedate");
    itemDueDate.textContent = duedate;

    const hr = document.createElement("hr");

    leftContainer.append(itemTitle, itemDescription);
    rightContainer.append(checklistItem, itemDueDate);
    item.append(leftContainer, rightContainer, hr);
    itemContainer.appendChild(item);
  }

  function checkboxOnListener(checklistItem, itemTitle, projectTitle) {
    checklistItem.classList.remove("checked");
    checklistItem.classList.add("unchecked");
    let item = itemMethods.findItem(projectTitle, itemTitle);
    item.checklist = "unchecked";

    checklistItem.addEventListener("click", () =>
      checkboxOffListener(checklistItem, itemTitle, projectTitle)
    );
  }

  function checkboxOffListener(checklistItem, itemTitle, projectTitle) {
    checklistItem.classList.remove("unchecked");
    checklistItem.classList.add("checked");
    let item = itemMethods.findItem(projectTitle, itemTitle);
    item.checklist = "checked";
    checklistItem.addEventListener("click", () =>
      checkboxOnListener(checklistItem, itemTitle, projectTitle)
    );
  }

  function expandItemListener() {}

  return { printItem, printHomeItems };
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

export {
  mainMethods,
  sidebarMethods,
  projectMethods,
  promptMethods,
  domItemMethods,
  domProjectMethods,
};
