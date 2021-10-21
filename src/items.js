import { projectMethods } from "./projects.js";

const itemFactory = (title, description, dueDate, checklist, priority) => {
  return { title, description, dueDate, priority, checklist };
};

const itemMethods = (() => {
  function createItem(title, description, dueDate, checklist,priority) {
    let newItem = itemFactory(title, description, dueDate, checklist,priority);
    let ProjectTitle = document.querySelector("#main-title").textContent;
    let project = projectMethods.findProject(ProjectTitle);
    project.info.push(newItem);
  }

  function findItem(projectTitle, title){
    let project = projectMethods.findProject(projectTitle)
    let item = project.info.find(
      (item) => item.title === title
    );
    return item;
  }
  return { createItem,findItem };
})();

export { itemMethods, itemFactory };
