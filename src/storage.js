import { projectMethods } from "./projects.js";
import { mainMethods } from "./domMain.js";

const localStorageMethods = (() => {
 
    function updateLocalStorage() {
        localStorage.clear()
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
        projectMethods.sliceProject()
      storedSession.forEach((element) => {
        projectMethods.projectsArray.push(element);
      });
     }
     console.log(projectMethods.projectsArray) 
  }

  return { updateLocalStorage, checkLocalStorage };
})();
export { localStorageMethods };
