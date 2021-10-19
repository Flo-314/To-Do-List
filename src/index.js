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
      domItemMethods.printItem(title,descriptionValue)
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
  function printArray (){
  array.forEach(item => {
      printItem()
    });

  }
  function printItem(title,description,duedate,checklist) {
    const main = document.querySelector("main")
    const item = document.createElement("div")
    const leftContainer = document.createElement("div")
    const itemTitle = document.createElement("div")
    const itemDescription = document.createElement("div")
    const rightContainer = document.createElement("div")
    const itemCheckList = document.createElement("div")
    const itemDueDate = document.createElement("div")

    itemTitle.textContent = title
    itemDescription.textContent = description
    itemDueDate.textContent = duedate

    leftContainer.append(itemTitle,itemDescription)
    rightContainer.append(itemCheckList,itemDueDate)
    item.append(leftContainer,rightContainer)
    main.appendChild(item)
  } 

function expandItem(){

 }
  return{printArray,printItem}

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
