import { mainMethods, promptMethods, printItemMethods } from "./domMain.js";
import { sidebarMethods, domProjectMethods } from "./domSideBar";
import { itemMethods } from "./items.js";
import { projectMethods } from "./projects.js";

domProjectMethods.printStoredProjects();
mainMethods.printMain("Home");

//to do
/* }
    ----- SIstema de prioridades | ordenNumeral   /..?? supongo que por un lado tendria que modificar en el itemfactory y por el otro lado en el Dom Item Methods + el read
    ----- local storage                                   /storage.js
    ------- no funciona bien el week por fechas ni el today por fechas. ni funciona en el home por como esta hecho.
 */
