const itemFactory = (title, description, checklist, priority, dueDate) => {
  return { title, description, checklist, priority, dueDate };
};

let array = [];

////////////////-------------------//////////

const promptMethods = (() => {
  createItemBtn();

  function createItemBtn() {
    const main = document.querySelector("main");
    const itemBtn = document.createElement("button");
    itemBtn.textContent = "Add New Task!";
    itemBtn.setAttribute("id", "itemBtn");
    itemBtn.addEventListener("click", () => itemPrompt());

    main.appendChild(itemBtn);
  }

  function removePromp() {
    const itemContainer = document.querySelector(".addItemContainer");
    itemContainer.remove();
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

    const sumbitBtn = document.createElement("button");
    sumbitBtn.textContent = "Add new Task!";

    sumbitBtn.addEventListener("click", () => {
      let descriptionValue = itemDescription.value;
      let titleValue = itemTitle.value;
      itemMethods.createItem(titleValue, descriptionValue);
      removePromp();
      createItemBtn();
    });

    const main = document.querySelector("main");
    addItemContainer.append(itemTitle, itemDescription, sumbitBtn);
    main.append(addItemContainer);
  }
  return { itemPrompt };
})();

////////////////-------------------//////////

const domItemMethods = (() => {
  
  function printItem() {

  }

 })();
////////////////-------------------//////////

const itemMethods = (() => {
  function createItem(title, description, checklist) {
    let newItem = itemFactory(title, description, checklist);
    array.push(newItem);
    console.log(array);
  }

  return { createItem };
})();

////////////////-------------------//////////
