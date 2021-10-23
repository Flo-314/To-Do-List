/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { mainMethods } from "./domMain";
import { domProjectMethods } from "./domSideBar";
import { localStorageMethods } from "./storage";

localStorageMethods.checkLocalStorage();

domProjectMethods.printStoredProjects();
mainMethods.printMainHome();

// to do
/*
    ------- no funciona bien el week por fechas ni el today por fechas. ni funciona en el home por como esta hecho.
    ------- drag and drop api capaz?
    ------- sistema de prioridades (mi idea es un numero en la array, y que segun que numeo primntie en base a eso.)
 */
