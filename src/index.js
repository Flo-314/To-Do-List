import { mainMethods} from "./domMain.js";
import { domProjectMethods } from "./domSideBar";
import { localStorageMethods } from "./storage.js";
import { projectMethods } from "./projects.js";

 localStorageMethods.checkLocalStorage()
domProjectMethods.printStoredProjects();
mainMethods.printMain("Home"); 
console.log(projectMethods.projectsArray)

//to do
/* 
    ----- local storage                                   /storage.js
    ------- no funciona bien el week por fechas ni el today por fechas. ni funciona en el home por como esta hecho.
 */
