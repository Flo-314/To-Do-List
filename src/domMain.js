/* eslint-disable import/no-cycle */
import { projectMethods } from "./projects";
import { itemMethods } from "./items";
import { domProjectMethods } from "./domSideBar";

const interactiveItemMethods = (() => {
  function checkboxOnListener(checklistItem, itemTitle, projectTitle) {
    checklistItem.classList.remove("checked");
    checklistItem.classList.add("unchecked");
    const item = itemMethods.findItem(projectTitle, itemTitle);
    item.checklist = "unchecked";

    // eslint-disable-next-line no-use-before-define
    checklistItem.addEventListener("click", () => checkboxOffListener(checklistItem, itemTitle, projectTitle));
  }

  function checkboxOffListener(checklistItem, itemTitle, projectTitle) {
    checklistItem.classList.remove("unchecked");
    checklistItem.classList.add("checked");
    const item = itemMethods.findItem(projectTitle, itemTitle);
    item.checklist = "checked";

    checklistItem.addEventListener("click", () => checkboxOnListener(checklistItem, itemTitle, projectTitle));
  }

  function editTitleListener(titleItem, TitleContainer) {
    const unEditedText = TitleContainer.textContent;
    titleItem.remove();
    const titleInput = document.createElement("input");
    titleInput.classList.add("title-input");
    titleInput.placeholder = "Task Title";
    titleInput.value = unEditedText;
    TitleContainer.appendChild(titleInput);
    return titleInput;
  }

  function editDescriptionListener(descriptionItem, descriptionContainer) {
    const unEditedText = descriptionContainer.textContent;
    descriptionItem.remove();
    const descriptionInput = document.createElement("input");
    descriptionInput.classList.add("description-input");
    descriptionInput.placeholder = "Task Description";
    descriptionInput.value = unEditedText;

    descriptionContainer.appendChild(descriptionInput);
    return descriptionInput;
  }

  function editDateListener(dateItem, dateContainer) {
    const unEditedText = dateContainer.textContent;
    dateItem.remove();
    const dateInput = document.createElement("input");
    dateInput.classList.add("date-input");
    dateInput.type = "date";
    dateInput.value = unEditedText;
    dateContainer.appendChild(dateInput);
    return dateInput;
  }

  function editItemListener(
    titleItem,
    TitleContainer,
    descriptionItem,
    descriptionContainer,
    dateItem,
    dateContainer,
    itemContainer,
    itemTitle,
    projectTitle,
  ) {
    const itemName = titleItem.textContent;
    const titleInput = editTitleListener(titleItem, TitleContainer);
    const descriptionInput = editDescriptionListener(
      descriptionItem,
      descriptionContainer,
    );
    const dateInput = editDateListener(dateItem, dateContainer);
    const sumbitBtn = document.createElement("button");
    sumbitBtn.textContent = "Sumbit";
    const item = itemMethods.findItem(projectTitle, itemName);
    sumbitBtn.addEventListener("click", () => {
      item.title = titleInput.value;
      item.description = descriptionInput.value;
      item.dueDate = dateInput.value;
      itemContainer.remove();
      // eslint-disable-next-line no-use-before-define
      printItemMethods.printItem(
        item.title,
        item.description,
        item.dueDate,
        "undefined",
      );
    });

    itemContainer.appendChild(sumbitBtn);
  }
  function deleteItem(projectTitle, itemTitle, itemContainer) {
    itemContainer.remove();
    itemMethods.deleteItem(projectTitle, itemTitle);
  }

  return {
    deleteItem,
    checkboxOffListener,
    checkboxOnListener,
    editItemListener,
  };
})();

const printItemMethods = (() => {
  function printTitle(title) {
    const itemTitleContainer = document.createElement("div");
    const itemTitle = document.createElement("div");
    itemTitleContainer.appendChild(itemTitle);
    itemTitleContainer.classList.add("item-title");
    itemTitle.textContent = title;
    return { itemTitleContainer, itemTitle };
  }
  function printItemDescription(description) {
    const itemDescriptionContainer = document.createElement("div");
    const itemDescription = document.createElement("div");
    itemDescriptionContainer.appendChild(itemDescription);
    itemDescription.classList.add("item-description");
    itemDescription.textContent = description;
    return { itemDescriptionContainer, itemDescription };
  }
  function printDuedate(duedate) {
    const itemDueDateContainer = document.createElement("div");
    const itemDueDate = document.createElement("div");
    itemDueDateContainer.appendChild(itemDueDate);
    itemDueDate.classList.add("item-duedate");
    itemDueDate.textContent = duedate;
    return { itemDueDateContainer, itemDueDate };
  }
  function printChecklist(checklist, title, projectTitle) {
    const checklistItem = document.createElement("div");
    checklistItem.classList.add("item-checklist");
    if (checklist !== "checked") {
      checklistItem.classList.add("unchecked");

      checklistItem.addEventListener("click", () => interactiveItemMethods.checkboxOffListener(
        checklistItem,
        title,
        projectTitle,
      ));
    } else {
      checklistItem.classList.add("checked");
      checklistItem.addEventListener("click", () => interactiveItemMethods.checkboxOnListener(
        checklistItem,
        title,
        projectTitle,
      ));
    }

    return checklistItem;
  }
  function printDeleteButton(projectTitle, title, itemContainer) {
    const deleteBtn = document.createElement("button");
    itemContainer.appendChild(deleteBtn);
    deleteBtn.textContent = "Delete Item";
    deleteBtn.addEventListener("click", () => interactiveItemMethods.deleteItem(projectTitle, title, itemContainer));
  }

  function printItem(title, description, duedate, checklist) {
    const projectTitle = document.querySelector("#main-title").textContent;
    const itemContainer = document.querySelector("#item-container");
    const item = document.createElement("div");
    item.classList.add("item");
    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left-container");
    const rightContainer = document.createElement("div");
    rightContainer.classList.add("right-container");

    const titleItem = printTitle(title);
    const { itemTitleContainer } = titleItem;
    const { itemTitle } = titleItem;

    const descriptionItem = printItemDescription(description);
    const { itemDescriptionContainer } = descriptionItem;
    const { itemDescription } = descriptionItem;

    const duedateItem = printDuedate(duedate);
    const { itemDueDateContainer } = duedateItem;
    const { itemDueDate } = duedateItem;

    const checklistItem = printChecklist(checklist, title, projectTitle);
    printDeleteButton(projectTitle, title, item);
    const hr = document.createElement("hr");

    itemTitle.addEventListener("click", () => {
      interactiveItemMethods.editItemListener(
        itemTitle,
        itemTitleContainer,
        itemDescription,
        itemDescriptionContainer,
        itemDueDate,
        itemDueDateContainer,
        item,
        title,
        projectTitle,
      );
    });

    itemDescription.addEventListener("click", () => {
      interactiveItemMethods.editItemListener(
        itemTitle,
        itemTitleContainer,
        itemDescription,
        itemDescriptionContainer,
        itemDueDate,
        itemDueDateContainer,
        item,
        title,
        projectTitle,
      );
    });

    itemDueDate.addEventListener("click", () => {
      interactiveItemMethods.editItemListener(
        itemTitle,
        itemTitleContainer,
        itemDescription,
        itemDescriptionContainer,
        itemDueDate,
        itemDueDateContainer,
        item,
        title,
        projectTitle,
      );
    });

    leftContainer.append(itemTitleContainer, itemDescriptionContainer);
    rightContainer.append(checklistItem, itemDueDateContainer);
    item.append(leftContainer, rightContainer, hr);
    itemContainer.appendChild(item);
  }
  function printHomeItems() {
    const homeArray = projectMethods.projectsArray;
    homeArray.forEach((project) => {
      const projectItems = project.info;

      projectItems.forEach((item) => {
        printItem(item.title, item.description, item.dueDate);
      });
    });
  }

  return {
    printItem,
    printTitle,
    printItemDescription,
    printDuedate,
    printChecklist,
    printHomeItems,
  };
})();
const mainMethods = (() => {
  function deleteMain() {
    const main = document.querySelector("main");
    main.innerHTML = "";
  }

  function createMainBody() {
    const main = document.querySelector("main");

    const mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main-content");

    const mainTitle = document.createElement("div");
    mainTitle.setAttribute("id", "main-title");

    const mainContainer = document.createElement("div");
    mainContainer.setAttribute("id", "item-container");

    main.append(mainContent, mainTitle, mainContainer);
  }

  function printMain(title) {
    deleteMain();
    createMainBody();
    const mainTitle = document.querySelector("#main-title");
    mainTitle.textContent = title;
    domProjectMethods.printProjectInMain(title);
    // eslint-disable-next-line no-use-before-define
    promptMethods.createItemBtn();
  }
  function printMainHome() {
    deleteMain();
    createMainBody();
    const mainTitle = document.querySelector("#main-title");
    mainTitle.textContent = "Home";
    printItemMethods.printHomeItems();
    // eslint-disable-next-line no-use-before-define
    promptMethods.createItemBtn();
  }
  return { printMain, deleteMain, printMainHome };
})();
const promptMethods = (() => {
  function removeItemPromp() {
    const itemContainer = document.querySelector(".addItemContainer");
    itemContainer.remove();
  }
  function createItemBtn() {
    const main = document.querySelector("main");
    const itemBtn = document.createElement("button");
    itemBtn.textContent = "Add New Task!";
    itemBtn.setAttribute("id", "itemBtn");
    // eslint-disable-next-line no-use-before-define
    itemBtn.addEventListener("click", () => itemPrompt());

    main.appendChild(itemBtn);
  }
  function itemPrompt() {
    const itemBtn = document.querySelector("#itemBtn");
    itemBtn.remove();

    const addItemContainer = document.createElement("div");
    addItemContainer.classList.add("addItemContainer");

    const itemTitle = document.createElement("input");
    itemTitle.type = "text";
    itemTitle.placeholder = "Task Title";
    itemTitle.classList.add("itemTitle");

    const itemDescription = document.createElement("input");
    itemDescription.type = "text";
    itemDescription.placeholder = "Description";
    itemDescription.classList.add("itemDescription");

    const dueDate = document.createElement("input");
    dueDate.type = "date";

    const sumbitBtn = document.createElement("button");
    sumbitBtn.textContent = "Add new Task!";

    sumbitBtn.addEventListener("click", () => {
      const descriptionValue = itemDescription.value;
      const titleValue = itemTitle.value;
      const dueDateValue = dueDate.value;

      itemMethods.createItem(titleValue, descriptionValue, dueDateValue);
      printItemMethods.printItem(titleValue, descriptionValue, dueDateValue);
      removeItemPromp();
      createItemBtn();
    });

    const main = document.querySelector("main");
    addItemContainer.append(itemTitle, itemDescription, dueDate, sumbitBtn);
    main.append(addItemContainer);
  }

  return { createItemBtn };
})();

export { mainMethods, promptMethods, printItemMethods };
