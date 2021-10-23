/* eslint-disable import/no-cycle */
import { projectMethods } from "./projects";
import { localStorageMethods } from "./storage";

const itemFactory = (title, description, dueDate, checklist, priority) => ({
  title,
  description,
  dueDate,
  priority,
  checklist,
});

const itemMethods = (() => {
  function createItem(title, description, dueDate, checklist, priority) {
    const newItem = itemFactory(
      title,
      description,
      dueDate,
      checklist,
      priority,
    );
    const ProjectTitle = document.querySelector("#main-title").textContent;
    const project = projectMethods.findProject(ProjectTitle);
    project.info.push(newItem);

    localStorageMethods.updateLocalStorage();
  }

  function findItem(projectTitle, title) {
    const project = projectMethods.findProject(projectTitle);
    const foundedItem = project.info.find((item) => item.title === title);
    return foundedItem;
  }
  function deleteItem(projectTitle, title) {
    const project = projectMethods.findProject(projectTitle);
    project.info.forEach((item, index) => {
      if (item.title === title) {
        project.info.splice(index);
      }
    });
    localStorageMethods.updateLocalStorage();
  }

  return { createItem, findItem, deleteItem };
})();

export { itemMethods, itemFactory };
