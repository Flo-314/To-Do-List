import { mainMethods, promptMethods, printItemMethods } from "./domMain.js";
import { sidebarMethods, domProjectMethods } from "./domSideBar";
import { itemMethods } from "./items.js";
import { projectMethods } from "./projects.js";

itemMethods.deleteItem("Home","sdf")
mainMethods.printMain("Home");
domProjectMethods.printStoredProjects();
//to do
/* }
    ----- SIstema de prioridades | ordenNumeral   /..?? supongo que por un lado tendria que modificar en el itemfactory y por el otro lado en el Dom Item Methods + el read
    ----- local storage                                   /storage.js
    ------- no funciona bien ni funciona en el home por como esta hecho.
 */
