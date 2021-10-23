/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { projectMethods } from "./projects.js";

const localStorageMethods = (() => {
  const templateArray = [
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

  function updateLocalStorage() {
    localStorage.clear();
    const projects = projectMethods.projectsArray;
    localStorage.setItem("session", JSON.stringify(projects));
  }
  function checkLocalStorage() {
    const storedSession = JSON.parse(localStorage.getItem("session"));
    if (
      storedSession !== undefined
      && storedSession !== null
      && storedSession !== ""
    ) {
      storedSession.forEach((element) => {
        projectMethods.projectsArray.push(element);
      });
    } else {
      templateArray.forEach((element) => {
        projectMethods.projectsArray.push(element);
      });
    }
  }

  return { updateLocalStorage, checkLocalStorage };
})();
export { localStorageMethods };
