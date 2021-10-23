/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { mainMethods } from "./domMain";
import { domProjectMethods } from "./domSideBar";
import { localStorageMethods } from "./storage";
import { projectMethods } from "./projects";

localStorageMethods.checkLocalStorage();

domProjectMethods.printStoredProjects();
mainMethods.printMain("Home");

// to do
/*
    ----- local storage                                   /storage.js
    ------- no funciona bien el week por fechas ni el today por fechas. ni funciona en el home por como esta hecho.
 */
