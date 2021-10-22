import { projectMethods } from "./projects.js";
import { mainMethods } from "./domMain.js";

const localStorageMethods = (() => {
 
    function updateLocalStorage() {
    let projects = projectMethods.projectsArray;
    localStorage.setItem("session", JSON.stringify(projects));
  }
  function checkLocalStorage() {
    let storedSession = JSON.parse(localStorage.getItem("session"));
    if (
      storedSession !== undefined &&
      storedSession !== null &&
      storedSession !== ""
    ) {
        projectMethods.projectsArray.slice(1,0)
      storedSession.forEach((element) => {
        projectMethods.projectsArray.push(element);
      });
    }
  
  }

  return { updateLocalStorage, checkLocalStorage };
})();
export { localStorageMethods };
