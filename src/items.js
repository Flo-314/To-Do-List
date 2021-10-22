import { projectMethods } from "./projects.js";
import { localStorageMethods } from "./storage.js";


const itemFactory = (title, description, dueDate, checklist, priority) => {
  return { title, description, dueDate, priority, checklist };
};

const itemMethods = (() => {
  function createItem(title, description, dueDate, checklist, priority) {
    let newItem = itemFactory(title, description, dueDate, checklist, priority);
    let ProjectTitle = document.querySelector("#main-title").textContent;
    let project = projectMethods.findProject(ProjectTitle);
    project.info.push(newItem);
    localStorageMethods.updateLocalStorage()
    console.log(projectMethods.projectsArray)

  }

  function findItem(projectTitle, title) {
    let project = projectMethods.findProject(projectTitle);
    let item = project.info.find((item) => item.title === title);
    return item;
  }
  function deleteItem(projectTitle, title) {
    let project = projectMethods.findProject(projectTitle);
    project.info.forEach(function (item, index) {
      if (item.title == title) {
        project.info.splice(index);
      }
    });
    localStorageMethods.updateLocalStorage()

    }

  return { createItem, findItem, deleteItem };
})();

export { itemMethods, itemFactory };
