import { projectMethods } from "./projects.js";

const itemFactory = (title, description, dueDate, priority, checklist) => {
  return { title, description, dueDate, priority, checklist };
};

const itemMethods = (() => {
  function createItem(title, description, dueDate, checkbox) {
    let newItem = itemFactory(title, description, dueDate, checkbox);
    let ProjectTitle = document.querySelector("#main-title").textContent;
    let project = projectMethods.findProject(ProjectTitle);
    project.info.push(newItem);
  }
  return { createItem };
})();

export { itemMethods, itemFactory };
